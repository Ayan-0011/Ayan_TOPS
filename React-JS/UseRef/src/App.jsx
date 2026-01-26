/*
useRef is a React Hook that lets you reference a value that’s not needed for rendering.

const ref = useRef(initialValue)

Does Not Cause Re-renders
If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

To avoid this, we can use the useRef Hook.

*/

import { useRef } from 'react';

function UseRef() {

   const count = useRef(0);

   const changeHandel=()=>{
     count.current=count.current+1;
     console.log(count.current);
    }    
    
  return (
    <div>      
        <input type="text" placeholder='Enter value' onChange={changeHandel} />
    </div>
  )
}

export default UseRef
