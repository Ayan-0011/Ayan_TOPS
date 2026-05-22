
/*
React useCallback Hook

The React useCallback Hook returns a memoized callback function.

Think of memoization as caching a value so that it does not need to be recalculated.

This allows us to isolate resource intensive functions 
so that they will not automatically run on every render.

The useCallback Hook only runs when one of its dependencies update.

This can improve performance.

The useCallback and useMemo Hooks are similar. 
The main difference is that useMemo returns a memoized value and useCallback 
returns a memoized function. You can learn more about useMemo in the useMemo 

*/


import React, { useCallback, useState } from 'react'

function React_useCallback() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Rah nagar");
    
    const increment = () => {
        alert('hello');
        setCount(count + 1);
        return count;
    };

    const data=useCallback(()=>increment(),[count]);

    const changeHandel = () => {
        setName("Akash Nagar")
    };

    return (
        <div>
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <hr />

                {data}

                <button className='btn btn-primary' onClick={changeHandel }>Changes</button>
                <h1>{name}</h1>

            </div>
        </div>
    )
}

export default React_useCallback