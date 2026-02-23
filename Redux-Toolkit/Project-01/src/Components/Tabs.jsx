import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/features/serchSlice';

const Tabs = () => {

  const tab = ["photo","video","gif"]

  const disptach = useDispatch()

  const activeTab = useSelector((state)=> state.serch.activeTab)

  return (

    <div className='flex gap-10 p-10'>
      {
        tab.map((value,idx)=>{
          return(
            <button key={idx} className={`${activeTab==value ? "bg-blue-700" : " bg-gray-600"} transition px-4 py-2 rounded uppercase cursor-pointer active:scale-95`}
            onClick={()=>disptach(setActiveTab(value))}
            >{value}</button>
          )
        })
      }
    </div>
  )
}

export default Tabs
