type pairOfNumbers = [number, number];
type pairOfNumberAndString = [number, string];

// function linearSearch(array: number[], x: number): pairOfNumbers {
//   for(let i = 0; i < array.length; i++) {
//     if(array[i] === x) return [i, array[i]];
//   }
//   return [-1, -1];
// }

// function linearSearchForString(array: string[], x: string): pairOfNumberAndString {
//   for(let i = 0; i < array.length; i++) {
//     if(array[i] === x) return [i, array[i]];
//   }
//   return [-1, ""];
// }

// const array: number[] = [1, 2, 5, 1, 2, 3, 5, 0, 6, -2, 3];
// console.log(linearSearch(array, 12));

// const stringArray: string[] = ["abc", "def", "ghi", "jkl"];
// console.log(linearSearchForString(stringArray, "def"));

// problem is code duplication one way is make it any but then it become like plain js
// Here generics comes into the picturd.

function linearSearch<T>(array: T[], x: T): [number, T] {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === x) return [i, array[i]];
  }
  return [-1, x];
}

const array: number[] = [1, 2, 5, 1, 2, 3, 5, 0, 6, -2, 3];
console.log(linearSearch<number>(array, 12));

const stringArray: string[] = ["abc", "def", "ghi", "jkl"];
console.log(linearSearch<string>(stringArray, "def"));

