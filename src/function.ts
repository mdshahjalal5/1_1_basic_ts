//  !n! repmv => return => parameter => method => void 
function sum(n1, n2){
    return n1 + n2;
}

console.log(sum(1, 2));

function sum2(n1:number, n2:number ):number{ 
    return  n1 + n2; 
}  


// const sumArrow = (n1:number, n2:number //!parameter tyipe ):number // ! return type => n1 + n2;
const sumArrow = (n1:number, n2:number):number => n1 + n2;


const numArray = [1, 3, 4, 5, 6, 7, 8, 9, 10]

// ! callback function parameter
const numSquare = numArray.map((num:number)=>{
    return num * num;
})



// !method  a function that is property of object
const per = {
    name:'abul', 
    money:5, 
    addBalance: function(tk:number){
        // !n! this is important 
        return this.money = this.money + tk;
    }
}


// !n! void  // void indicates the function does not return value
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

console.log('chk')