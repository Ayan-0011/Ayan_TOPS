// Object.freeze() allows:

// Existing properties cannot be updated ❌
// New properties cannot be added ❌
// Existing properties cannot be deleted ❌

// Everything becomes fully locked.

const user = {
    name: "Ayan",
    age: 21
};

Object.freeze(user);

user.age = 22;           // not allowed
user.city = "Ahmedabad"; // not allowed
delete user.name;        // not allowed

console.log(user);