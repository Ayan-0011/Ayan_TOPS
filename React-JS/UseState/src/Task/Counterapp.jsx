import React, { useState } from 'react'

const Counterapp = () => {
    const [num, setnum] = useState(0);

    function Increase() {
        setnum(num + 1)
    }

    function decrease() {
        if(num > 0)
        setnum(num - 1)
    }
    
    return (

        <div className="card">
            <div className="header">
                <div>
                    <h1>Counter App</h1>
                </div>
            </div>
            <div className="display-box">
                <div className="number">{num}</div>
            </div>
            <p className="info-text">Tap buttons below to change the value</p>
            <div className="grid">
                <button className="inc" onClick={Increase}>Increment</button>

                <button className="dec" onClick={decrease} >Decrement</button>

                <button className="inc5"onClick={()=> setnum(num + 5)} >Increase by 5</button>
                
                <button className="clear" onClick={()=>setnum(num - num)}>Clear All</button>
            </div>
        </div>

    )
}

export default Counterapp
