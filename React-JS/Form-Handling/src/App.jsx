import React from 'react'

const App = () => {

  const submithanlde = (e)=>{
    e.preventDefault()
      console.log("form submit");
      
  }
  return (
    <div>
        <form onSubmit={(e)=>{
          submithanlde(e)
        }}>

          <input type="text" placeholder='Enter Name' />
          <button>Submnit</button>
        </form>
    </div>
  )
}

export default App
