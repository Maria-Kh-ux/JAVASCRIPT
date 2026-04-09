"use strict";
// 1. Function Declaration (Класична)
function name1() { /* код */ }

// 2. Function Expression (Функція, збережена в змінну)
const name2 = function() { /* код */ };

// 3. Arrow Function (Стрілкова функція, сучасний короткий запис)
const name3 = () => { /* код */ };

function countArgs(){
    return arguments.length;
}
console.log(countArgs(1, 2, 3, 4)); 
console.log(countArgs("яблуко", "банан")); 

function compare(a, b){
    if(a<b){
        return -1
    }
    else if (a>b) {
    return 1
    }
    else {
      return 0
    }
}
console.log(compare(5, 10));
console.log(compare(10, 5));
console.log(compare(7, 7)); 

function getFactorial(n){
    let result = 1;
    for (let i = 1; i <= n; i++){
        result *= i;}
 return result;
}
console.log(getFactorial(6));

function makeNumber(a, b, c) {
    return +(`${a}${b}${c}`);
}
console.log(makeNumber(3, 8, 4)); 

function getArea(a, b = a) {
    return a * b;
}

console.log(getArea(5, 10)); 
console.log(getArea(8));  

