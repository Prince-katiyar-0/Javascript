 const name="Solo";
 const repocount =100

 console.log(name+repocount+"Value");
 console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
 
 const gameName =new String('Solo-lolo')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));
console.log(gameName.indexOf('o'));

const newString=gameName.substring(0,5)  //cant give negative value in subsring coz if we do it will start from 0 and ignore the negative value
console.log(newString); 

const anotherString=gameName.slice(-7,5); // can give negative value in slice method and it will start from the end of the string and count backwards
console.log(anotherString);

const newStringOne="   Solo    ";
console.log(newStringOne);
console.log(newStringOne.trim()); //it will remove the white spaces from the start and end of the string but not from the middle 

const url="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCDQ"

console.log(url);

console.log(url.replace("channel","-"));
console.log(url.includes("youtube"));

console.log(gameName.split('-'));

