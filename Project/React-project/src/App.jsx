import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contac from './pages/Contact'
import axios from 'axios'
import Footer from './Components/Footer'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'
import AdminRoute from './Admin/AdminRoute'
import Dashbord from './Admin/Dashbord'
import Category_products from './pages/Category_products'
import { useCart } from './Context/CartContext'
import MyOrder from './pages/MyOrder'

const App = () => {
  const [location, setLocation] = useState();
  const [opendropdown, setOpendropdown] = useState(false);
  const { cartitem, setCartitem } = useCart();


  const getlocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords
      // console.log(latitude, longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try {
        const location = await axios.get(url)
        const exactLocation = location.data.address
        setLocation(exactLocation)
        setOpendropdown(false)
        //console.log(exactLocation);

      } catch (error) {
        console.log(error);
      }

    })
  }

  useEffect(() => {
    getlocation()
  }, []);


   //Load cart from local storage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItem')
    if(storedCart){
      setCartitem(JSON.parse(storedCart))
    }
  }, []);

  //save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartitem))
  }, [cartitem])


  return (
    <div>
      <BrowserRouter>
        <Navbar location={location} getlocation={getlocation} opendropdown={opendropdown} setOpendropdown={setOpendropdown} />
        
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product' element={<Products />}></Route>
          <Route path='/products/:id' element={<SingleProduct />}></Route>
          <Route path='/category/:category' element={<Category_products />}></Route>
          <Route path='/contact' element={<Contac />}></Route>
          <Route path='/myorder' element={<MyOrder />}></Route>
          <Route path='/cart' element={<Cart location={location} getlocation={getlocation} />}></Route>
          <Route path="/admin/dashbord" element={ <AdminRoute> <Dashbord />  </AdminRoute> }/>
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  )
}

export default App
