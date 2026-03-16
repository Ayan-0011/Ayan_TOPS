// this is keyword that referes to the object that is calling the function

// the value of this depends o how function called, not when it is defined 


// this with object 
const user = {
name:"ayan",
greet : function (){
        console.log(this.name)
    }
};

user.greet()


// const user = {
// name:"ayan",
// greet : ()=>{
//         console.log(this.name)
//     }
// };

// user.greet()  --> undefined 