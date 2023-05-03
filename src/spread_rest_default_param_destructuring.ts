//   !n! serd => spe res def ring => spread => rest => default parameter => destrucuring => ]

// !n! ts rest 
// ! rest parameter 
const cube = (...nums:number[]) => nums.map(n => n*n*n)
const cubeRes = cube(1, 2, 3, 4, 5, 6, 7, 8)
console.log(cubeRes, '"cube"')

// ! void only use when no return value is provided
const voidFunction = (n:number):void => console.log(n*n)
voidFunction(3)
var aliasing = {
    name: 'John',
    age: 30
}

const {age:nameAlias} = aliasing
console.log(nameAlias, '"nameAlias"')

export default cube;

