const score =100
console.log(score);
const balance =new Number(1899.2342)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=231.2445;
console.log(otherNumber.toPrecision(3));


const hundreds =100000000
console.log(hundreds.toLocaleString('en-IN'));


/////////////   Maths   //////////////////////
console.log('\n');
console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(7.24));

console.log(Math.ceil(7.45));
console.log(Math.floor(7.45));
console.log(Math.min(5,6,7,7,2,4,5,1,-5));
console.log(Math.max(5,6,7,7,2,4,5,1,-5));

console.log(Math.random());  //it will give us a random number between 0 and 1
 console.log(Math.floor(Math.random()*10)+1);


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min));