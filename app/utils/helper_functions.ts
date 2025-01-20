export const toTitleCase = (str: String) => {
  return str
    .toLowerCase()
    .split(/[-_\s]/)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};
