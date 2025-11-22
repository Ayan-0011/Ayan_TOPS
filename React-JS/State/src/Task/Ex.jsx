import React, { useState } from 'react'

const Ex = () => {
    const [arr, setarr] = useState([10,20,30]);


    function add(){
        const newarr=[...arr];
        newarr.push(99);
        setarr(newarr)
        
    }

  return (
    <div>
        <p>{arr}</p>
        <button onClick={add}>add items</button>
    </div>
  )
}

export default Ex
