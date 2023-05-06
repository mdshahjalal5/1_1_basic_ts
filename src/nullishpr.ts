// !n! nullish coelescing 
const od:null | undefined | string = '';
const ev = od??"odvalue"
console.log(ev, '"od"');


function greet(name) {
    const greeting = `Hello, ${name ?? "World"}!`;
    console.log(greeting);
}

// greet(undefined); // "Hello, World!"
// greet(null); // "Hello, World!"
greet("Alice"); // "Hello, Alice!"


type valueType = null | undefined | '' | 'ismai'
let valueType:valueType = 'ismai'


