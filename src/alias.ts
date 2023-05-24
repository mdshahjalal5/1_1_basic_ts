// !n! type alias 
// ! tant => type =>name of type  => type explicit 

type multiply = (x:number, y:number) => number;


// ?imp!  this type function I never used 

const sqr = (n1:number, n2:number, task:(x:number, y:number)=>number) =>  {
    return task(n1, n2,)
}

const res = sqr(3,5, (x, y ) => x * y)
console.log(res , '"res"')
type Multiply = (x: number, y: number) => number;

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

// fdasdf