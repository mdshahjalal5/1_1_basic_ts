 // !n! nun => nul un ne => null unknown never 

// ! nev ni  =>nev=> never void=>  
// ? ni => ni un =>  any unknown> =>   unknown implicit any
// ! null 
const searchName = (value: string | null):void => {
    if (value === null) {
        console.log("There is nothing to search");  
    } else {
        console.log("Searching...");
    }
};

searchName(null);

// kmh^-1 --> ms^-1
//  !n! unknown // what's the require of known we can use implicit any
const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    if (typeof speed === "string") {
        const [value, unit] = speed.split(" "); // ['10' ,'kmh^-1']

        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    } else {
        console.log("There is wrong type");
    }
};
const str = 'lorem phs'
str.split(' ')
const str2:unknown=  'them '

if(Array.isArray(str2)) {// ? unknown first check the type if ok then execute the function(per)(perhaps)
    str2.slice() // ?q! what do type unknown 
}

getMyCarSpeed(10);
getMyCarSpeed("10 kmh^-1"); // 10 kmh-1
getMyCarSpeed(true);

//  !n! never // the function never return anything // can't we use void // why never 

// ?q! why never we can use void
function throwError(message: string): never {
    throw new Error(message);
}

throwError("Bhai bhai error hyeche , kandi dimu");





