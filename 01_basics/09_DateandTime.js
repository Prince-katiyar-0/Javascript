//Dates

let mydate=new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

// let mycreateddate=new Date(2026,0,5)


let myCreatedDate= new Date(2026,0,23,5,6) // month is 0 indexed so 0 means january and 1 means february and so on and the date is 23 and the time is 5:06 am
console.log(myCreatedDate.toLocaleString());

let mycreateddateone=new Date("2026-01-08")
console.log(mycreateddateone.toLocaleString());


let myTimeStamp=Date.now()

console.log(myTimeStamp);
console.log(mycreateddateone.getTime());

console.log(Math.floor(Date.now()/1000));

console.log("\n");
let newDate=new Date();
console.log(newDate.getFullYear());
console.log(newDate.getDate());
console.log(newDate.getTime());


`${newDate.getDay()}and the time`

newDate.toLocaleString('default',{
    weekday:'long',
    month:'long',
    timeZone:'Asia/Kolkata'
})
