// !n! nullish coelescing 

const od:null | undefined | string = '';
const ev = od??"odvalue" // ?n?  here od's value is not null|undefined so "ev"'s  value not accept "odvalue" 

// console.log(ev, '"od"');

const is_buetian: undefined |boolean |string |null=null
const nullish = is_buetian?? "yes buetian" 
console.log(nullish);


function greet(name) {
    const greeting = `Hello, ${name ?? "World"}!`;
    console.log(greeting);
}

// greet(undefined); // "Hello, World!"
// greet(null); // "Hello, World!"
greet("Alice"); // "Hello, Alice!"


type valueType = null | undefined | '' | 'ismai'
let valueType:valueType = 'ismai'




// ? 5/28/2023, 8:37:02 AM 5/28/2023, 8:37:03 AM 5/28/2023, 8:37:03 AM 5/28/2023, 8:37:03 AM 5/28/2023, 8:37:03 AM 5/28/2023, 8:37:03 AM 


// ! n! if inputSomething is null | undefined then checkInput value is "no input" 
const inputSomething:unknown =null;
const checkInput = inputSomething ?? "No input";
console.log(checkInput);


// !n! if inputSomething2 is not null | undefined then checkInput value will be the inputSomething value
const inputSomething2: unknown = 'its not null or undefined';
const checkInput2 = inputSomething2 ?? "No input";
console.log(checkInput2); //?ts not null or undefined'