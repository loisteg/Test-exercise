const last = (arg: number[]): number[] => {
  if (arg.length > 0) return [arg[arg.length - 1]];
  return;
};

// If we don't use TypeScript

// const last = (arg) => {
//   if (arg.length > 0) return [arg.at(-1)];
//   return;
// };

console.log(last([1, 2, 3]));
console.log(last([1, 2, 3, 4]));
console.log(last([]));
