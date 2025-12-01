import React, { useEffect, useState } from 'react'

const App = () => {



  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  //component load jone pe chalega yani jab jab program run hoga ye useeffect chlega or [] na lagaye to koi bhi state update hoga to useeffect chalega 
    useEffect(() => {
      console.log("use effect is running...");   
    },[]);


    //[] me jis state ke value chnage hogaa ya state update hoga to [dependency ke ander us state ko paas karenge] tab yebuseeffet chalega 
    useEffect(() => {
      console.log("numer is increse",num1); 
    }, [num1]);
    
    useEffect(() => {
      console.log("number is dicrese",num2);    
    }, [num2]);




  return (
    <div>
      <h1>num1 is {num1}</h1>
      <h1>num2 is {num2}</h1>

        <button onClick={()=>{
          setNum1(num1 + 1)
        }}>Add</button>

        <button onClick={()=>{
          setNum2(num2 - 1)
        }}>Minus</button>
    </div>
  )
}

export default App
