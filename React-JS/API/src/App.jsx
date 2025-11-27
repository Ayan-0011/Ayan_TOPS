import React, { useState } from 'react'
import axios from 'axios'


// First Install npm i axios dependency for use axios api 

const App = () => {

const [data, setData] = useState([]);

  const getdata = async ()=>{
   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
    
    setData(response.data)
  }



  return (
    <div>
          <button onClick={getdata}>get Data</button>
          <div>
            {data.map(function(ele,idx){
              return <h2 key={idx}>hero:{idx+1}</h2>
            })}
          </div>
    </div>
  )
}

export default App
