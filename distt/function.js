"use strict";
//  !n! repmv => return => parameter => method => void
function sum(n1, n2) {
  return n1 + n2;
}
console.log(sum(1, 2));
function sum2(n1, n2) {
  return n1 + n2;
}
// const sumArrow = (n1:number, n2:number //tparameter tyipe ):number // ! return type => n1 + n2;
const sumArrow = (n1, n2) => n1 + n2;
const numArray = [1, 3, 4, 5, 6, 7, 8, 9, 10];
// ! callback function parameter
const numSquare = numArray.map((num) => {
  return num * num;
});
// !method  a function that is property of object
const per = {
  name: "abul",
  money: 5,
  addBalance: function (tk) {
    // !n! this is important
    return (this.money = this.money + tk);
  },
};
// !n! void  // void indicates the function does not return value
function greet(name) {
  console.log(`Hello, ${name}!`);
}
console.log("chk");
