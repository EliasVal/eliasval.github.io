export const HTMLCollectionIndexOf = (
  collection: HTMLCollection | HTMLCollectionOf<HTMLElement>,
  item: HTMLElement
) => {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] == item) return i;
  }
  return -1;
};
