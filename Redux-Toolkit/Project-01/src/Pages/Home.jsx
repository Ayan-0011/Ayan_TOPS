import React from 'react'
import Serchbar from '../Components/Serchbar'
import Tabs from '../Components/Tabs'
import ResultGrid from '../Components/ResultGrid'
import { useSelector } from 'react-redux'

const Home = () => {

    const { quary} = useSelector((state) => state.serch);
    return (
        <div>
            <Serchbar />
            {
                (quary && quary.trim() !== "") ? <div><Tabs /><ResultGrid /></div> : ""
            }

            
            

        </div>
    )
}

export default Home
