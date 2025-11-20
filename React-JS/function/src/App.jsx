import React from 'react'

const App = () => {

  const alert = (e) => console.log ("clicked....", e.bubbles) ;  


  const scrollmaping = (e)=>{
    console.log("scrolling...", e.deltaY);  
  }

  const all = (e) =>{
    console.log (e.target.value);
  } 
  


  return (
    <>
    <button onClick={alert}>click hear</button>

    <div className='box' onWheel={scrollmaping}></div>

    <input type="text" onChange={all} />
    </>
  )

}

export default App
