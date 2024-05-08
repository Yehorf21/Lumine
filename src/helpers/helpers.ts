export const convertToKebabCase = (string: string) => {
  const arr = string.split(' ');

  return arr.map(word => word.toLowerCase()).join('-');
};