import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuary } from '../redux/features/serchSlice';


const Serchbar = () => {

    const [serch, setSerch] = useState('');

    const dispatch = useDispatch();

    const submithandle =(e)=>{
        e.preventDefault()
        //console.log(serch);

        dispatch(setQuary(serch));
        setSerch('')
        
    }

  return (
    <div>

      <form onSubmit={(e)=>submithandle(e)} className='flex gap-10b bg-(--c2) w-full px-10 p-10'>

        <input type="text" className='border-2 w-full px-4 py-2 text-xl outline-none rounded' placeholder='serch anything...' required value={serch} 
        onChange={(e)=> setSerch(e.target.value)} />
       
        <button className='active:scle-95 curor-pointer border-2 px-4 py-2 rounded'>Serch</button>

      </form>




    </div>
  )
}

export default Serchbar
