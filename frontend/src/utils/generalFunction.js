const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const tabTitle = (newtitle) => {
  return document.title = toTitleCase(newtitle);
};