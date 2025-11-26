import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');

  const submithanlde = (e)=>{
    e.preventDefault()

      console.log("form submit");
      
      setTitle('')
      
  }
  return (
    <div>
        <form onSubmit={(e)=>{
          submithanlde(e)
        }}>

          <input type="text" placeholder='Enter Name' value={title} onChange={(e)=>{
              setTitle(e.target.value)
              
          }}/>
          <button>Submnit</button>
        </form>
    </div>
  )
}

export default App
