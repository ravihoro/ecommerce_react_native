export const toTitleCase = (str: String) => {
  return str
    .toLowerCase()
    .split(/[-_\s]/)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

export const getPrice = (num: string) => {
  const parsedNumber = parseFloat(num);
  const fixedNumber = parsedNumber.toFixed(2);
  const numberString = fixedNumber.toString();
  const parts = numberString.split(".");
  const integerPart = parts[0];
  const decimalPart = parts.length > 1 ? parts[1] : "00";
  const paddedDecimalPart = decimalPart.padEnd(2, "0");
  return `${integerPart}.${paddedDecimalPart}`;
};
