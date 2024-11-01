//t: 01/11/2024  07:13 AM Fri GMT+6  Sharifpur, Gazipur, Dhaka

const sqrPr = (
  n1: number,
  n2: number,
  task: (x: number, y: number) => number,
) => {
  return task(n1, n2);
};

const result = sqrPr(3, 5, (b, c) => b * c);
console.log("result (File: aliaspr.ts, Line: 11):", result);

// console.log(result, "result"); //t: 15

const applyOperation = (
  x: number,
  y: number,
  addition: (b: number, c: number) => number,
) => {
  const op = addition(x, y);
  return op;
};

const op = applyOperation(30, 40, (any, many) => any + many);

// console.log(op, "op"); //t: 70 "op"

const mapArray = (arr: number[], process: (x: number) => number): number[] => {
  return arr.map(process);
};

const trippleArray = mapArray([3], (x) => x * 3);
console.log(trippleArray, "aliaspr.ts", 34);
