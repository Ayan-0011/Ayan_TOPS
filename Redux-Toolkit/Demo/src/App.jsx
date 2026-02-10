import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { byAmount, change, decrement, increment } from './App/Slices/counterSlice';

const App = () => {

  const {no, name}  = useSelector((state)=>state.count);
  const dispatch = useDispatch();

  const [num, setNum] = useState();

  return (
    <div className="app-container">
      <div className="card">
        <div className="header">
          <h1 className="title">Counter App</h1>
          <p className="user-name">User: <span>{name}</span></p>
          <button className="btn btn-change" onClick={()=>dispatch(change())}>Change Name</button>
        </div>

        <div className="counter-display">
          <h2>Current Count</h2>
          <div className="counter-value">{no}</div>
        </div>

        <div className="button-group">
          <button className="btn btn-primary" onClick={()=>dispatch(increment())}>Increment</button>
          <button className="btn btn-danger" onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>

        <div className="input-group">
          <label htmlFor="amount">Increase by Amount:</label>
          <div className="input-button-wrapper">
            <input 
              id="amount"
              type="number" 
              className="input-field"
              value={num} 
              onChange={(e)=>setNum(Number(e.target.value))}
              placeholder="Enter amount"
            />
            <button className="btn btn-success" onClick={()=>dispatch(byAmount(num))}>Add Amount</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
