// call(), apply(), bind()

//these three methods are used to control the value of this in function 
//this method used to explicitly set the value of this when calling a function 

/* call and apply both invoke a functions immediately and allow us to set the value of this. the diffrence is that 
call() take argumnets indivisually while apply() take arguments as a array 
bind() does not execute the function immediately but return a new function with this permanently bound.  */

// call() --> comma -> immediately --> pass indivisal 
// apply() --> arry -> immediately --> pass as array 
// call() --> build new function  -> no --> return a new function.



// 1) call()

function greet(city){
    console.log(`hello ${this.name} from ${city}`)
}
const user = {name:"ayan"}
greet.call(user,"nadiad");

// 2) apply()

function greet1(city){
    console.log(`hello ${this.name} from ${city}`)
}
const user1 = {name:"ayan"}
greet1.apply(user1,["mumbai"]);


// 3) bind()
function user2(){ 
    console.log(this.name) 
}
const user3 = {name:"ayan"};
const new_user = user2.bind(user3)

new_user()