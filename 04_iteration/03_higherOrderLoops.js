// for of loop

// ["","","",""] array ke andar string elements 

// [{},{},{}]   array ke andar objects elements

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// Maps

// known for its holding unique value and agar duplicate elements hote hai toh usse print nhi krta also jis order mein diya jaata hai waise hi print hota hai 



const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
console.log(map)


for (const [key,value] of map) {

    console.log(key, ':- ', value);
}


const myObj={
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for(const [key,value] of myObj){
//     console.log(key,':-',value);

// }

// this obj is not iterable there is different way to iterate this particular 


