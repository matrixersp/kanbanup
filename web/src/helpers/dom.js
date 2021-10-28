export function isNonEmptyObject(obj) {
  return Object.entries(obj).length > 0 && obj.constructor === Object;
}

export function getOffsetTop(el) {
  let offsetTop = el.offsetTop;
  while (el.offsetParent) {
    offsetTop += el.offsetParent.offsetTop;
    el = el.offsetParent;
  }
  return offsetTop;
}

export function getScrollOffsetTop(el, height) {
  let offsetTop = getOffsetTop(el);
  if (offsetTop + height > window.innerHeight)
    offsetTop = window.innerHeight - (height + 6);
  if (offsetTop < 0) offsetTop = 6;
  return offsetTop;
}

export function getOffsetBottom(el) {
  let offsetBottom = el.offsetTop + el.offsetHeight;
  while (el.offsetParent) {
    offsetBottom += el.offsetParent.offsetTop;
    el = el.offsetParent;
  }
  return offsetBottom;
}

export function getOffsetLeft(el) {
  let offsetLeft = el.offsetLeft;
  while (el.offsetParent) {
    offsetLeft += el.offsetParent.offsetLeft - el.offsetParent.scrollLeft;
    el = el.offsetParent;
  }
  return offsetLeft;
}

export function getScrollOffsetLeft(el, width) {
  let offsetLeft = getOffsetLeft(el);
  if (offsetLeft + width > window.innerWidth)
    offsetLeft = window.innerWidth - (width + 6);
  if (offsetLeft < 0) offsetLeft = 6;
  return offsetLeft;
}
