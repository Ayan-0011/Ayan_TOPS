import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

const [data, setData] = useState([]);

  const getdata = async ()=>{
    const responce = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
    console.log(responce.data);
  }

  

  return (
    <div>
      <button onClick={getdata} className='p-4 bg-gray-500 m-2 active:scale-90'> get data</button>
    </div>
  )
}

export default App
