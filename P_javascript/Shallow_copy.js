const user1 ={
    name:"ayan",
    city:{
        address:"nadiad"
    }
};

const user2 ={...user1}

user2.name="ansari";
user2.city="rcb";


console.log(user1.name,user1.city);
console.log(user2);

