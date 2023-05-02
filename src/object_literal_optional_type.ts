// !fi! 

//  !n! einlim => expplicit =>implicit=> intersection => literal =>modifier =>

// ! implicit type 
const profile = {
    name: 'shah',
    age: 20,
    profession: 'dev',
    isMarried: false,
    phone: 33349
}
// ! profile.name = 3 ** Type 'number' is not assignable to type 'string'.

// !explicit type 
const prof2: {
    name: string,
    age: number,
    profession: 'student',  // ! literal type 
    isMarried: false,
    wifeName?: string // !n! Intersection of an object's value types in TypeScript
} = {
    age: 3,
    // ! profession:'students',  //! [ts] Type '"students"' is not assignable to type '"student"'.
    profession: 'student',
    isMarried: false,
    name: 'shah'
}

const car: {
    readonly type: string,  // !n!  readonly is  modifiers
    model: string,
     year: number
     } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
}


