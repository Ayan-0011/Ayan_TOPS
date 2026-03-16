// create a closure function 
function outerFunction(outerVariable) {
    
    return function innerFunction(innerVariable) {
        console.log(`Outer variable: ${outerVariable}`);
        console.log(`Inner variable: ${innerVariable}`);
    }
}

const newFunction = outerFunction('I am from outer function');
newFunction('I am from inner function');

