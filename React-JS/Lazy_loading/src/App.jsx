import React, { Suspense } from 'react'
import Hero from './component/hero'
import './index.css';
import { lazy } from 'react';

const Lazy_Suspence = lazy(() => import('./component/Lazy_Suspence'));

const App = () => {
  return (
    <>
      <Hero />
      <hr />

        <Suspense fallback={<><h2 className='loading'>Loading....</h2></>}>
          <Lazy_Suspence />
        </Suspense>

    </>
  )
}

export default App
