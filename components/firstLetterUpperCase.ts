export const firstLetterUpperCase = (item: string) => {
  if (!item) return item;

  return item[0].toUpperCase() + item.slice(1);
}
