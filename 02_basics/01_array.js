//array

const myarr=[0,1,2,3,4,5];
const myheros=["ironman","spiderman","thor"]

const myarr2=new Array(1,2,3,4,5,6);
console.log(myarr[1]);


// Array methods

myarr.push(6)
myarr.push(7)
myarr.pop()

myarr.unshift(9)
myarr.shift()

console.log(myarr.includes(9));
console.log(myarr.indexOf(3));

const newArr=myarr.join();

console.log(myarr);
console.log(newArr);

// slice,splice

console.log("A ",myarr);

const myn1=myarr.slice(1,3)

console.log(myn1);
console.log("B ",myarr);

const myn2=myarr.splice(1,4)

console.log("C ", myarr);
console.log(myn2);

///////////////////////////

const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
// 
// marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // Accessing the second element of the nested array (flash)

const allheros=marvel_heros.concat(dc)
console.log(allheros);

const all_new_heros=[...marvel_heros,...dc]
console.log(all_new_heros);

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=anotherarray.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Solo"));
console.log(Array.from("Solo"));
console.log(Array.from({name:"SOLO"}));  //interesting case here, it will create an empty array because the object does not have a length property


let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));

