import { useUser } from "@clerk/clerk-react";
import { useCart } from "../Context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import emptyCart from "../assets/empty-cart.png"
import Loading from '../assets/Loading4.webm'
import { Link, useNavigate } from "react-router-dom";
import signin from '../assets/signin.jpeg'
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { ChevronDownCircle, ChevronDownIcon, ChevronFirstIcon, ChevronRight } from "lucide-react";

const Cart = ({location, getlocation}) => {
  const { cartitem, updateQuantity, deleteItem, placeOrder } = useCart()
  const navigate = useNavigate()


  const totalPrice = cartitem.reduce((total, item) => total + item.price, 0)


  const { user, isLoaded, isSignedIn } = useUser();
  if (!isLoaded)
    return
  <>
    <div className='flex justify-center items-center w-[400px] mx-auto'>
      <video muted autoPlay loop>
        <source src={Loading} type='video/webm' />
      </video>
    </div>
  </>;

  if (!isSignedIn) return <>
    <div className=' flex flex-col gap-3 justify-center items-center h-[590px] mt-10'>
      <div>
        <h1 className='text-red-500/80 font-bold text-5xl text-muted m-3 ms-10'>Plese Sign-up first</h1>
        <img src={signin} alt="no" onClick={() => navigate('https://winning-hawk-24.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A5173%2Fcart%2FSignInButton')} className="cursor-pointer" />
      </div>
    </div>

  </>

  //console.log(user.publicMetadata);

  return (
    <div className="mt-10 max-w-6xl mx-auto px-1 md:px-0 mb-10">
      {
        cartitem.length > 0 ? <div>
          <div className="flex justify-between mx-5">
          <h1 className="font-bold text-md md:text-2xl mt-2">My cart ({cartitem.length})</h1>
             <button onClick={() => navigate('/myorder')} className='bg-gray-800 mb-5 text-white px-2 py-2 rounded-full text- cursor-pointer flex gap-1 items-center'><ChevronDownCircle />Show Previous Order</button>
          </div>
          <div>
            <div className="mt-5">
              {
                cartitem.map((item, idx) => {
                  return <div key={idx} className="bg-gray-100 p-5 rounded-md flex justify-between mt-3 w-full items-center">
                    {/* product info */}
                    <div className="flex gap-6">
                      <img src={item.images[0]} alt={item.name} className="w-20 h-20 rounded-md" />
                      <div>
                        <h1 className="md:w-[300px] mt-1 line-clamp-2 text-md">{item.title}</h1>
                        <p className="text-red-500 font-semibold text-lg">₹{item.price.toLocaleString("en-IN")}</p>
                      </div>
                    </div>
                    {/* product quintity */}
                    <div className="bg-red-500 text-white flex gap-1 p-2 me-1 rounded-md font-bold text-lg ">
                      <button onClick={()=> updateQuantity(cartitem, item.id, "dicrease")} className="cursor-pointer">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={()=> updateQuantity(cartitem, item.id, "increase")} className="cursor-pointer">+</button>
                    </div>
                    {/* product delete */}
                    <div>
                      <span onClick={()=> deleteItem(item.id)} className='hover:bg-white/60 text-2xl'>
                        <FaRegTrashAlt className='text-red-500 text-4xl cursor-pointer p-1.5 hover:bg-white/80 rounded-full shadow-2xl transition-all' />
                      </span>
                    </div>
                  </div>
                })
              }
            </div>
              
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-20'>
              {/* delivery infro */}
              <div className='bg-gray-100 rounded-md p-7 mt-4 space-y-2'>
                <h1 className='text-gray-800 mb-5 font-bold text-xl'>Delivery Info</h1>
                <div className='flex flex-col space-y-1'>
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder='Enter your name' className='p-2 rounded-md bg-white' value={user?.fullName} />
                </div>
                <div className='flex flex-col space-y-1'>
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder='Enter your address' className='p-2 rounded-md bg-white' value={location?.state_district} />
                </div>
                <div className='flex w-full gap-5'>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">State</label>
                    <input type="text" placeholder='Enter your state' className='p-2 rounded-md bg-white w-full' value={location?.state} />
                  </div>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">PostCode</label>
                    <input type="text" placeholder='Enter your postcode' className='p-2 rounded-md bg-white w-full' value={location?.postcode} />
                  </div>
                </div>
                <div className='flex w-full gap-5'>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">Country</label>
                    <input type="text" placeholder='Enter your country' className='p-2 rounded-md bg-white w-full' value={location?.country} />
                  </div>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">Phone No</label>
                    <input type="text" placeholder='Enter your Number' className='p-2 rounded-md bg-white w-full' />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className='bg-red-500 text-white px-3 py-1 rounded-md mt-3 cursor-pointer'>Submit</button>
                </div>
                <div className='flex items-center justify-center w-full text-gray-700'>
                  ---------OR-----------
                </div>
                <div className='flex justify-center'>
                  <button onClick={getlocation} className='bg-red-500 text-white cursor-pointer px-3 py-2 rounded-md'>Detect Location</button>
                </div>
              </div>

              {/* bill detail */}
              <div className="bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max'">
                <h1 className='text-gray-800 font-bold text-xl mb-8'>Bill details</h1>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700'><span><LuNotebookText /></span>Items total</h1>
                  <p>₹{totalPrice.toLocaleString("en-IN")}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700'><span><MdDeliveryDining /></span>Delivery Charge</h1>
                  <p className='text-red-500 font-semibold'><span className='text-gray-600 line-through'>₹25</span> FREE</p>
                </div>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700'><span><GiShoppingBag /></span>Handling Charge</h1>
                  <p className='text-red-500 font-semibold'>₹7</p>
                </div>
                <hr className='text-gray-200 mt-2' />
                <div className='flex justify-between items-center'>
                  <h1 className='font-semibold text-lg'>Grand total</h1>
                  <p className='font-semibold text-lg'>₹{totalPrice.toLocaleString("en-IN") + 7}</p>
                </div>
                <div>
                  <h1 className='font-semibold text-gray-700 mb-3 mt-7'>Apply Promo Code</h1>
                  <div className='flex gap-3'>
                    <input type="text" placeholder='Enter code' className='p-2 rounded-md w-full' />
                    <button className='bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md'>Apply</button>
                  </div>
                </div>
                <button onClick={()=>placeOrder("user_1")} className='bg-red-500 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3'>Proceed to Checkout</button>
              </div>
            </div>
            
          </div>
        </div>

          : <>
          <div className="flex justify-center">
             <button onClick={() => navigate('/myorder')} className='bg-gray-800 mb-5 text-white px-3 py-2 rounded-full cursor-pointer flex gap-1 items-center'><ChevronDownCircle />Show My Order</button>
          </div>
            <div className=' flex flex-col gap-3 justify-center items-center h-[550px]'>
              <h1 className='text-red-500/80 font-bold text-3xl md:text-4xl text-center text-muted'>Oh no! Your cart is empty</h1>
              <img src={emptyCart} alt="" className='w-[230px] md:w-[400px]' />
              <button onClick={() => navigate('/product')} className='bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer '>Continue Shopping</button>
            </div>
          </>
      }
    </div >
  );
};

export default Cart;
