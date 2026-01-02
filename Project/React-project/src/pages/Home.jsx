import React from 'react'
import Crousel from '../Components/Crousel'
import Midbanner from '../Components/Midbanner'
import Features from '../Components/Features'
import FeaturedProducts from '../pages/FeatureProdcuts'
import CategoryBanners from './CategoryBanners'

const Home = () => {
  return (
    <>
      <Crousel/>
      <CategoryBanners/>
      <FeaturedProducts/>
      <Midbanner/>
      <Features/>
    </>

    
  )
}

export default Home


