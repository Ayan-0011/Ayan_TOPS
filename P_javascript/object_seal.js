
// Object.seal() allows:

// Existing properties can be updated ✅
// New properties cannot be added ❌
// Existing properties cannot be deleted ❌

// So structure becomes fixed, but values can still change.


const user ={
    name:"ayan",
    age:21
};

Object.seal(user);

user.age=25;            //Allowed
user.add="nadiad";      //not allowed
delete user.name;       //not allowed

console.log(user);

