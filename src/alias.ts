//t: !n! type alias
//t: ! gnag => glcr =>anzr bs glcr  => glcr rkcyvpvg

type multiply = (x: number, y: number) => number;

//t: ?imp!  this type function I never used

const sqr = (
  n1: number,
  n2: number,
  task: (x: number, y: number) => number,
) => {
  return task(n1, n2);
};

const res = sqr(3, 5, (x, y) => x * y);
console.log(res, '"res"');

type Multiply = (x: number, y: number) => number;

//t: !n! type alias
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const car2: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

//t: !n! interfaces2

interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};
const mapArray2 = (
  arr: number[],
  operation: (x: number) => number,
): number[] => {
  return arr.map(operation);
};

const doubledArray = mapArray([1, 2, 3, 4], (x) => x * 2);
console.log(doubledArray, "doubledArray"); // Outputs: [2, 4, 6, 8]
