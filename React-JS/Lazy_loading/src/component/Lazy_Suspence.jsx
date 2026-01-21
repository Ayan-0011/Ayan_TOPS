import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Lazy_Suspence = () => {

  const [data, setData] = useState([]);

  const Getdata = async () => {
    const res = await axios.get("https://picsum.photos/v2/list");
    setData(res.data);
    console.log(data);

  }

  useEffect(() => {
    Getdata();
  }, [])

  return (
    <div>

      <h2>Image List</h2>

      {data.map((item) => (
        <img key={item.id} src={item.download_url} alt={item.author} width="25%" height={"300px"} />
      ))}
    </div>
  )
}

export default Lazy_Suspence
