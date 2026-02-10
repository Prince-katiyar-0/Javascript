
const programming=["js","rb","py","java","cpp"]

// programming.forEach( function (item) {
//     console.log(item);
// } )



programming.forEach((item)=>{
    console.log(item);
})

function printme(item){
    console.log(item);
}
programming.forEach(printme)

programming.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


const myCoding=[
    {
        languageName:"javascript",
        languageFilename:"js"
    },
    {
        languageName:"java",
        languageFilename:"java"
    },
    {
        languageName:"python",
        languageFilename:"py"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageName)
})
