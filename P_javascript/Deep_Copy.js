const user1 ={
    name:"ayan",
    city:{
        address:"nadiad"
    }
};

const user2 =JSON.parse(JSON.stringify(user1))

user2.name="ansari";
user2.city="mumbai";


console.log(user1);
console.log(user2);

