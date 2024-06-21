//  !n! repmv => return => parameter => method => void
function sum(n1, n2) {
  return n1 + n2;
}

console.log(sum(1, 2));

function sum2(n1: number, n2: number): number {
  return n1 + n2;
}

// const sumArrow = (n1:number, n2:number //!parameter type ):number // ! return type => n1 + n2;
const sumArrow = (n1: number, n2: number): number => n1 + n2;

const numArray = [1, 3, 4, 5, 6, 7, 8, 9, 10];

// ! callback function parameter
const numSquare = numArray.map((num: number) => {
  return num * num;
});

// !method  a function that is property of object
const per = {
  name: "abul",
  money: 5,
  addBalance: function (tk: number) {
    // !n! this is important. by this command we can get all the obj's properties inside the obj. it's an awesome feature
    return (this.money = this.money + tk);
  },
};

// A void function is a type of function in programming that does not return a value. This type of function performs an action but does not provide any information back to the caller. Here’s a breakdown:
//
// Characteristics of a Void Function:
// No Return Value: The function performs its task but does not return any value to the calling code.
// Purpose: Commonly used for actions like printing to the screen, modifying variables, or performing operations where no result needs to be sent back.
// Syntax: Varies by programming language but generally involves using a keyword like void to define the function.
//

// !n! void  // void indicates the function does not return value
function greet5(name: string): void {
  console.log(`Hello, ${name}!`);
}

console.log("chk");
/mnt/fed/web2/1ts/2_Basic_type_of_ts_parent/10BasicTypeOfTs/package.json
