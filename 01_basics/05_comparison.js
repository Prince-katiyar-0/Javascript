// console.log(2>4);
// console.log(1==1);

console.log("3" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// the reason of the  particular output is that an equality check == and comparison < > >= <= work differently comparisons convert null to a number treating as 0 thas why num >=0 is true and null>0 is fallse

console.log(undefined >0);
console.log(undefined ==0);
console.log(undefined >=0);

// === strict coomparison does not perform type conversion and considers different types as different values 


console.log("2" === 2);
