import React from 'react'
import Crousel from '../Components/Crousel'
import Midbanner from '../Components/Midbanner'
import Features from '../Components/Features'
import FeaturedProducts from '../pages/FeatureProdcuts'

const Home = () => {
  return (
    <>
      <Crousel/>
      <FeaturedProducts/>
      <Midbanner/>
      <Features/>
    </>

    
  )
}

export default Home


