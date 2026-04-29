//Normal Funcion 

// function abc(a,b,c){
//     return a+b+c;
// }

// console.log(abc(2,3,4));



//currying form 
function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
};

console.log(sum(2)(4)(3));


//short way 
const add = a => b=> c=> a+b+c ;

console.log(add(5)(5)(5));
