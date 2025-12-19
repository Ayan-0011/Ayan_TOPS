import { useUser } from "@clerk/clerk-react";
import { useCart } from "../Context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import emptyCart from "../assets/empty-cart.png"
import Loading from '../assets/Loading4.webm'
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cartitem } = useCart()
  const navigate = useNavigate()

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

  if (!isSignedIn) return <p className="text-lg text-red-600 flex justify-center">Please login.....</p>;

  //console.log(user.publicMetadata);

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-10">
      {
        cartitem.length > 0 ? <div>
          <h1 className="font-bold text-2xl">My cart ({cartitem.length})</h1>
          <div>
            <div className="mt-10">
              {
                cartitem.map((item, idx) => {
                  return <div key={idx} className="bg-gray-100 p-5 rounded-md flex justify-between mt-3 w-full items-center">
                    {/* product info */}
                    <div className="flex gap-6">
                      <img src={item.images[0]} alt={item.name} className="w-20 h-20 rounded-md" />
                      <div>
                        <h1 className="w-[300px] line-clamp-2">{item.title}</h1>
                        <p className="text-red-500 font-semibold text-lg">₹{item.price}</p>
                      </div>
                    </div>
                    {/* product quintity */}
                    <div className="bg-red-500 text-white flex gap-2 p-2 rounded-md font-bold text-lg ">
                      <button className="cursor-pointer">-</button>
                      <span>1</span>
                      <button className="cursor-pointer">+</button>
                    </div>
                    {/* product delete */}
                    <div>
                      <span className='hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl'>
                        <FaRegTrashAlt className='text-red-500 text-2xl cursor-pointer' />
                      </span>
                    </div>
                  </div>
                })
              }
            </div>






            
          </div>
        </div>

          : <>
            <div className=' flex flex-col gap-3 justify-center items-center h-[550px]'>
              <h1 className='text-red-500/80 font-bold text-5xl text-muted'>Oh no! Your cart is empty</h1>
              <img src={emptyCart} alt="" className='w-[400px]' />
              <button onClick={() => navigate('/product')} className='bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer '>Continue Shopping</button>
            </div>
          </>
      }
    </div>
  );
};

export default Cart;
