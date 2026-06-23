
// array reverse 
function rev(arr){

    let result = [];

    for (let i=arr.length-1; i>=0; i--) {
        
        result.push(arr[i])
    }
    return result
}

console.log(rev([10,20,30,40,50]));

// sring reverese
function rev(str){

    let result = "";

    for (let i=str.length-1; i>=0; i--) {
        
        result += str[i]
    }
    return result
}

console.log(rev("ayan"));
