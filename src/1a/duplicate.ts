const duplicate = (arg: number[]): number[] => {
  return [...arg, ...arg];
};

console.log(duplicate([1, 2, 3]));
console.log(duplicate([1, 2, 3, 4]));
