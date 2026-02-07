// Singleton 

// object literals 

const mySym=Symbol("keys1")

const jsUser={
    name:"solo",
    "full name":"Why Solo",
    [mySym]:"mykey1",
    age:22,
    location:"India",
    email:"asd@gmial.com",
    isLoggedIn:false,
    lastloginDays:["Monday","Tuesday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email="123@gmail.com"
// Object.freeze(jsUser) //This will prevent any modifications to the object, including adding, deleting, or changing properties.
jsUser.email="346@dfs.com";
console.log(jsUser);


jsUser.greeting=function(){
    console.log("hello js user");
}
console.log(jsUser.greeting());//this is not a function, it will return undefined because we have frozen the object and cannot add new properties or methods to it.
jsUser.greetingtwo=function(){
    console.log(`hello js user ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

//singelton now 

// const Tinderuser=new object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="tammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);


const regularUser={
    email:"Some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"john",
            lastname:"doe"
        }
    }
}
console.log(regularUser.fullname.userfullname.lastname);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",f:"f"}

const obj3=Object.assign({},
obj1,obj2,obj4)

console.log(obj3);

const obj5={...obj1,...obj2,...obj4}

console.log(obj5);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));


const course={
    courseName:"js in hindi",
    price:999,
    courseInstructor:"solo"

}

const {courseInstructor:instructor}=course //destructuring the courseInstructor property from the course object and assigning it to a new variable called instructor
console.log(instructor);


/// APIs

// {
//     "name" :"SOLO",
//    "coursename":"js in hindi",
//     "price": "free"
// }






