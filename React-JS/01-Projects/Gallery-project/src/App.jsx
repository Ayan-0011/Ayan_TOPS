import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

const [data, setData] = useState([]);

  const getdata = async () =>{
    const responce = await axios.get("https://fakestoreapiserver.reactbd.org/api/products")
 
    setData(responce.data)
    console.log(data);
    
  }

  
  return (
    <div>
      <button onClick={getdata} className='p-4 bg-gray-500 m-2 active:scale-90'> get data</button>

  
         <div>
            {data.map(function(ele,idx){
              return <h2 key={idx}>hero:{idx+1}</h2>
            })}
          </div>

    </div>
  )
}

export default App
