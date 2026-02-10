

// find lenght of string without using length property

const str = "Hello World";
let count = 0;
let str2="javascript";

for(let i=0; str[i] !== undefined; i++){
    count++;
    str2 += str[i];
}
console.log("the length of the string is:"+count);
console.log("the concate of 2 string:"+str2);


//string reverse without using reverse method

let str3 = "Hello World";
let reverseStr = "";
for(let i=str3.length-1; i>=0; i--){
    reverseStr += str3[i];
}
console.log("the reverse of the string is:"+reverseStr);

// remove duplicate characters from string

let str4 = "hello world";
let uniqueStr = "";
for(let i=0; i<str4.length; i++){
    if(uniqueStr.indexOf(str4[i]) === -1){
        uniqueStr += str4[i];
    }
}
console.log("the string after removing duplicate characters is:"+uniqueStr);

//
