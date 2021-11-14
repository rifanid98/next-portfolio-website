export const capitalize = (str: string): string => {
  const firstLetter = str.charAt(0);
  const restLetter = str.substr(1, str.length);
  return `${firstLetter.toUpperCase()}${restLetter}`;
};

export const dummyFunction = () => {};
