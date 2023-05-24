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
const read:Color = Color.Red;

const red = Color[read] 
console.log("this is color of" ,red);

// ? 5/24/2023, 6:44:14 AM (revised )

enum prof {
    student, 
    teacher, 
    unemployed
}

let profession:prof =prof.teacher;
let proof = prof[profession]
console.log(proof);

const relation = prof[profession] === "teacher" ? `He is my ${prof[profession]}` : `He is not my ${prof[profession]}`

console.log(relation);



