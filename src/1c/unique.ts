// The first variant

// const unique = (arg: number[]): number[] => {
//   const result: number[] = [];

//   if (arg.length <= 0) return arg;

//   check: for (let i = 0; i < arg.length; i++) {
//     const element: number = arg[i];

//     if (arg.lastIndexOf(element) !== i) {
//       continue check;
//     }

//     result.push(element);
//   }
//   return result.sort();
// };

// The second variant (if we don't use TypeScript)

// const unique = (arg) => {
//   return [...new Set(arg)];
// };

// The third variant

const unique = (arg: number[]) => {
  return arg.filter((value, index, self) => self.indexOf(value) === index);
};

console.log(unique([1, 2, 3, 3, 4]));
console.log(unique([1, 2, 3, 4, 1, 3]));
console.log(unique([]));
