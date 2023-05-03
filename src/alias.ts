// !n! type alias 
// ! tavt => type =>variable => type explicit 

type multiply = (x:number, y:number) => number;

const sqr = (n1:number, n2:number, task:(x:number, y:number)=>number) =>  {
    return task(n1, n2,)
}

const res = sqr(3,5, (x, y ) => x * y)
console.log(res , '"res"')

 function into(p1:number, p2:number, work:multiply) {
    return work(p1, p2);
 }

// !n! type alias
 type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car2: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

// !n! interfaces

interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
};