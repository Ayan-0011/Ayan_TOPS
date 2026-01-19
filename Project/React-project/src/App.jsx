import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contac from './pages/Contact'
import axios, { Axios } from 'axios'
import Footer from './Components/Footer'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'
import AdminRoute from './Admin/Routes/AdminRoute'
import Category_products from './pages/Category_products'
import { useCart } from './Context/CartContext'
import MyOrder from './pages/MyOrder'
import { useUser } from '@clerk/clerk-react'
import { toast } from 'react-toastify'
import Sidebar from './Admin/Components/Sidebar'
import Orders from './Admin/Pages/Orders'
import ProductsCard from './Components/ProductsCard'
import Users from './Admin/Pages/Users'
import Dashboard from './Admin/Pages/Dashboard'
import Productss from './Admin/Pages/Productss'
import Categories from './Admin/Pages/Categories'
import CartNotOpen from './pages/CartNotOpen'
import MainLayout from './pages/MainLayout'
import PageNotFound from './pages/PageNotFound'
import Feedback from './Admin/Pages/Feedback'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  const [location, setLocation] = useState();
  const [opendropdown, setOpendropdown] = useState(false);
  const { cartitem, setCartitem } = useCart();



  const { user, isLoaded } = useUser();
  // console.log(user);


  useEffect(() => {

    if (isLoaded && user && !user.publicMetadata?.role) {
      user.update({
        publicMetadata: {
          role: "user",
        },
      });
    }

    createUserIfNotExists(user);

  }, [isLoaded, user]);

  const mapClerkUser = (user) => ({
    user_id: user.id,
    name: user.fullName,
    email: user.primaryEmailAddress?.emailAddress,
    image: user.imageUrl,
    role: user.publicMetadata?.role || "user",
    createdAt: user.createdAt,
  });


  const createUserIfNotExists = async (user) => {
    if (!user) return;

    try {
      const res = await axios.get(`http://localhost:5000/users?user_id=${user.id}`);

      if (res.data.length === 0) {
        const USER_DATA = mapClerkUser(user);
        //console.log(res.data.length);

        await axios.post("http://localhost:5000/users", USER_DATA);
        toast.success(`😊 Welcome ${user.firstName}`)
      } else {
        //console.log("User already exists");
      }
    } catch (err) {
      console.error(err);
    }
  };



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
    if (storedCart) {
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
         {/* smooth transtion when other page open  */}
            <ScrollToTop/>
        <Routes>
          {/* navbar and footer routing */}
          <Route path="/" element={<MainLayout location={location} getlocation={getlocation} opendropdown={opendropdown} setOpendropdown={setOpendropdown} />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/product' element={<Products />}></Route>
            <Route path='/products/:id' element={<SingleProduct />}></Route>
            <Route path='/category/:category' element={<Category_products />}></Route>
            <Route path='/contact' element={<Contac />}></Route>

            {/* not going this route when admin login  */}
            <Route element={<CartNotOpen />}>
              <Route path='/myorder' element={<MyOrder />}></Route>
              <Route path='/cart' element={<Cart location={location} getlocation={getlocation} />}></Route>
            </Route>
          </Route>
            
          {/* Routing for admin side  */}
          <Route path="/admin" element={<AdminRoute> <Sidebar /> </AdminRoute>}>
            <Route path="dashbord" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="productss" element={<Productss />} />
            <Route path="category" element={<Categories />} />
            <Route path="users" element={<Users />} />
            <Route path="fb" element={<Feedback />} />
          </Route>
          {/* Page not Found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
