// const array = [1, 2, 3, 4, 5];

// const doubled = array.map(num => num * 2);
// const filter = array.filter(num => num % 2 === 0);
// const reduce = array.reduce((acc, num) => acc + num, 0);


// console.log(reduce); // Output: 15   

const rev = [10,20,30,40,50];
const res=[];

for(let i=rev.length-1;i>=0;i--){
    res.push(rev[i]);
}
console.log(res); // Output: [50,40,30,20,10]

