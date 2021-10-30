export function normalizeLists(lists) {
  const listIds = [];
  const listsById = lists.reduce((acc, cur) => {
    const { cards, ...list } = cur;

    const cardIds = cards.map((c) => c._id);
    list.cards = cardIds;

    listIds.push(list._id);

    acc[cur._id] = list;
    return acc;
  }, {});
  return { byId: listsById, ids: listIds };
}

export function normalizeCards(cards) {
  const cardIds = [];
  const cardsById = cards.reduce((acc, cur) => {
    cardIds.push(cur._id);

    acc[cur._id] = cur;

    return acc;
  }, {});

  return { byId: cardsById, ids: cardIds };
}
