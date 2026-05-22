/*
The React useMemo Hook returns a memoized value.

The useMemo Hook only runs when one of its dependencies update.

Using memo will cause React to skip rendering a component if its props have not changed.

This can improve performance.


*/


import React, { useMemo } from 'react'
import { useState } from "react";

function React_memo() {

  const [count, setCount] = useState(0);   
  const [name, setName] = useState("Rah nagar"); 
  const increment = () => {
    setCount(count+1);
  };

  const expensiveCalculation = (num) => {
        alert('hello')
    };

    
    //const calculation= expensiveCalculation(count); //withaout useMEMO ALL TIME REDURING 
    const calculation= useMemo(()=>expensiveCalculation(count),[count])  // WITH useMemo only function call when depedancy count change  


  return (
    <div>
        Count: {count}
        <button onClick={increment}>+</button>

        <h2>Expensive Calculation</h2>
        {calculation}

        <hr />
        <button className='btn btn-primary' onClick={()=>setName("Akash Nagar")}>Changes</button>
        <h1>{name}</h1>


    </div>
  )
}


export default React_memo