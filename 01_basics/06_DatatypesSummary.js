// Primitive 

// 7 types :String,Number , Boolean,null,undefined,Symbol,BigInt

const score =100
const scorevalue=10.4

const isLoggedIn=false
const outsideTemp=null
let userEmail; //undefined

const id= Symbol('123')
const  anotherId=Symbol('123')
console.log(id===anotherId);  //false because each symbol is unique even if they have the same description

const bigNumber=1289431349274n //console.log(typeof bigNumber); 
// BigInt is used to represent integers with arbitrary precision, allowing you to work with numbers larger than the maximum safe integer in JavaScript (2^53 - 1). It is denoted by appending 'n' to the end of the number literal.


// Refrence types(Non primitive )
// Array, Object,Functions

const heros=["spiderman","ironman","thor"]
let myObj={
    name:"solo",
    age:22,
}

const myFunction=function(){
    console.log("hello world");

}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof bigNumber);


//ecmascript se padhna hai for the datatypes summary and comparison operators



///memories

// Stack(primitive type), Heap(Non primitive type)

let myYoutubeNmae="Solo Learning"

let anothername=myYoutubeNmae
anothername="Solo soul"
console.log(myYoutubeNmae); // Solo Learning
console.log(anothername); // Solo soul

// in the above example anothername is a copy of myYoutubeNmae and they are stored in different memory locations. So when we change anothername it does not affect myYoutubeNmae because they are independent of each other.

let userOne ={
    email:"asnf@njdfk.com",
    upi:"asnf@okhdf"
}

let userTwo=userOne
userTwo.email="ijlad@jik.com"

console.log(userOne.email);
console.log(userTwo.email);

