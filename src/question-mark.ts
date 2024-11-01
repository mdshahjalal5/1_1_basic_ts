// !fi!
//t tan =>  terneray operator and nullish coeslancing operator
//t:ernary operator
const age: number = 15;

if (age >= 18) {
  console.log("Yes");
} else {
  console.log("No"); // "No"
}

const isAdult = age >= 18 ? " Yes" : "No";
console.log(isAdult); // "No"

// Nullish Coalesnace Operator
// Null and Undefined

const isAuthenticatedUser = null;
// !n! if the username null & undefined then userName will be Guest
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";

console.log({ userName }, { userName2 }); //*[ { userName: 'Guest' }, { userName2: 'Guest' } ]

type Manush = {
  name: string;
  age: number;
  address: {
    city: "NO City";
    road: "No Road";
    home?: unknown;
  };
};

const manush1: Manush = {
  name: "Manush",
  age: 100,
  address: {
    city: "NO City",
    road: "No Road",
    home: null,
  },
};

const home = manush1?.address?.home ?? "No Home"; // default 'No Home'
console.log({ home });
