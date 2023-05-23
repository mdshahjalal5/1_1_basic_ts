// !n! nullish coelescing 

// !n!  if value is null | undefined it will behave like true in ternary  operator

const od:null | undefined | string = '';
const ev = od??"odvalue" // ?n?  here od value is not null|undefined so "ev"  value not accept "odvalue" 

console.log(ev, '"od"');

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


