// !n! uinum => union => intersection => enum => u or (|) => in & => 
type identity = {
    name:string, 
    age:number,
    isMarried:boolean,
    profession:string,
}

const myself:identity = {
    name: "John",
    age: 20,
    isMarried: true,
    profession:'student'
}

// !n! union type 

const  herself:identity | {
    name:string, 
    isTalendted:true, // ! literal type that means value is specified
} = {
    name:"sagor", 
    age:20,
    isMarried:true,
    profession:'teacher'
 }

// !n! ts intersection 
 const moreInfo:identity &{
    study:string,
 } ={
    name:"sagor",
    age:20,
        isMarried:true,
        profession:'teacher',
        study:"java"
 }
// !n!ts enum 
enum Color {
    Red,
    Green,
    Blue
}

let favoriteColor: Color = Color.Blue;
var anotherColor:Color = Color.Green

console.log("My favorite color is " + Color[favoriteColor]);