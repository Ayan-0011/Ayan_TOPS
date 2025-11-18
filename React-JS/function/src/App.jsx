import React from 'react'

const App = () => {

  const alert = (e) => console.log ("clicked....", e.bubbles) ;  


  const scrollmaping = (e)=>{
    console.log("scrolling...", e.deltaY);  
  }


  return (
    <>
    <button onClick={alert}>click hear</button>
    
    <div className='box' onWheel={scrollmaping}></div>
    </>
  )

}

export default App
