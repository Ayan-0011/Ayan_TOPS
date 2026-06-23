function palindrome(str){

 let rev=str.split('').reverse().join('');
 
 return str===rev;
}

console.log(palindrome("madam"));
