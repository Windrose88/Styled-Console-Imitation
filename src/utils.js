export const DEFAULT_PATH = "C:\\users\\admin> ";

export const setCaretAtEnd = (node) => {
  let range = document.createRange();
  range.selectNodeContents(node);
  range.collapse(false);
  let sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
};

export const getCaret = (node) => {
  let caretAt = 0;
  const sel = window.getSelection();

  if (sel.rangeCount == 0) {
    return caretAt;
  }

  const range = sel.getRangeAt(0);
  const preRange = range.cloneRange();
  preRange.selectNodeContents(node);
  preRange.setEnd(range.endContainer, range.endOffset);
  caretAt = preRange.toString().length;

  return caretAt;
};
