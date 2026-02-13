// const programming = ["js", "rb", "py", "java", "cpp"]


// const value = programming.forEach((item) => {
//     console.log(item);
//     return item;
// })
// console.log(value);



///   filters


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums=myNum.filter((num) => num > 4)


// const newNums=myNum.filter((num) => {
//     return num>4
// })

const newNums=[]
myNum.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums);




