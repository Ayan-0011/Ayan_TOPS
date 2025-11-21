import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);

  function incresenum(){
     setNum(num+1)
  }


  function decresenum(){
    if(num>0){
      setNum(num-1)
    }
  }
  

  return (
    <div className='box'>
      <p>Counter App</p>
      
        <h1>{num}</h1>

        <button onClick={incresenum}>Increse</button>
        <button onClick={decresenum}>Decrese</button><br></br>

        <button onClick={ ()=> setNum(num+5) }>Increse by 5</button>

        <button onClick={ ()=> setNum(num-num) }>All Clear</button>

    </div>
  )
}

export default App
