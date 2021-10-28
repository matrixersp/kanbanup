const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');
const validateObjectId = require('../middleware/validateObjectId');
const validateBoardId = require('../middleware/validateBoardId');
const { Board, List, validateList } = require('../models/board');
const { Card } = require('../models/card');

router.post('/', [auth, validateBoardId], async (req, res) => {
  const { error } = validateList(req.body);
  if (error) {
    const errors = [];
    error.details.forEach(d => errors.push({ error: d.message }));
    return res.status(400).json({ errors });
  }

  const list = new List({ title: req.body.title });
  const query = {
    _id: req.body.boardId,
    participants: req.user._id
  };
  const update = { $push: { lists: list } };
  const options = { new: true };

  const board = await Board.findOneAndUpdate(query, update, options);

  if (!board)
    return res
      .status(404)
      .json({ error: 'The board with the given ID was not found.' });

  return res.status(201).json(board.lists[board.lists.length - 1]);
});

router.patch(
  '/:id',
  [auth, validateObjectId, validateBoardId],
  async (req, res) => {
    const { error } = validateList(req.body);
    if (error) {
      const errors = [];
      error.details.forEach(d => errors.push({ error: d.message }));
      return res.status(400).json({ errors });
    }

    const board = await Board.findOne({
      _id: req.body.boardId,
      'lists._id': req.params.id
    });
    if (!board)
      return res
        .status(404)
        .json({ error: 'The list with the given ID was not found.' });

    const index = board.lists.findIndex(
      l => req.params.id === l._id.toString()
    );
    if (index === -1)
      return res
        .status(404)
        .json({ error: 'The list with the given ID was not found.' });

    const list = board.lists[index];
    list.title = req.body.title;

    await board.save();

    res.status(200).json(list);
  }
);

router.delete(
  '/:id',
  [auth, validateObjectId, validateBoardId],
  async (req, res) => {
    const board = await Board.findOne({
      _id: req.body.boardId,
      participants: req.user._id
    });
    if (!board)
      return res
        .status(404)
        .json({ error: 'The board with the given ID was not found.' });

    const index = board.lists.findIndex(
      l => req.params.id === l._id.toString()
    );
    if (index === -1)
      return res
        .status(404)
        .json({ error: 'The list with the given ID was not found.' });

    const listId = board.lists[index];
    board.lists.splice(index, 1);

    await board.save();
    await Card.deleteMany({ listId });

    res.status(200).json({ message: 'The list was successfully deleted.' });
  }
);

module.exports = router;
