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
import { ChevronDownCircle } from "lucide-react";
import { useState } from "react";
import Lottie from "lottie-react";
import orderSuccess from '../assets/success.json'


const Cart = ({ location, getlocation }) => {
  const { cartitem, updateQuantity, deleteItem, placeOrder } = useCart()
  const [phone, setPhone] = useState("");



  const [paymentMethod, setPaymentMethod] = useState();
  const navigate = useNavigate()

  const [showAnimation, setShowAnimation] = useState(false);



  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    if (
      !user?.fullName ||
      !location?.state ||
      !location?.postcode ||
      !location?.country ||
      !phone
    ) {
      alert("Please fill all delivery details");
      return;
    }

    // order place
    await placeOrder(user.id, paymentMethod);

    // animation show
    setShowAnimation(true);

    // 3.5 sec baad redirect
    setTimeout(() => {
      setShowAnimation(false);
      navigate("/myorder");
    }, 3500);
  };



  const totalPrice = cartitem.reduce( (total, item) => total + item.price * item.quantity, 0 );


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
        <h1 className='text-red-500/80 font-bold text-3xl md:text-5xl text-muted m-3 '>Plese Sign-up first</h1>
        <img src={signin} alt="no" onClick={() => navigate("https://winning-hawk-24.accounts.dev/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A5173%2Fcart")} className="cursor-pointer w-[300px] md:w-[400px]" />

      </div>
    </div>

  </>

  //console.log(user.publicMetadata);

  return (
    <div className="mt-10 max-w-6xl mx-auto px-1 md:px-0 mb-10">

      {showAnimation && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <Lottie animationData={orderSuccess} loop={false} className="w-72 h-72" />
          <h2 className="text-2xl font-bold text-green-600 mt-4">
            Order Placed Successfully 🎉
          </h2>
          <p className="text-gray-500 mt-1">Processing your order...</p>
        </div>
      )}

      {
        cartitem.length > 0 ? <div>
          <div className="flex justify-between mx-5">
            <h1 className="font-bold md:border border-gray-300 md:p-3 md:rounded-lg md:bg-rose-600 md:text-white text-md md:textmd mt-2">My Cart ({cartitem.length})</h1>
            <button onClick={() => navigate('/myorder')} className='bg-gray-800 mb-5 text-white px-2 py-2 rounded-full text-sm cursor-pointer flex gap-1 items-center'><ChevronDownCircle />Show Previous Order</button>
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
                      <button onClick={() => updateQuantity(cartitem, item.id, "dicrease")} className="cursor-pointer">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(cartitem, item.id, "increase")} className="cursor-pointer">+</button>
                    </div>
                    {/* product delete */}
                    <div>
                      <span onClick={() => deleteItem(item.id)} className='hover:bg-white/60 text-2xl'>
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
                    <input type="text" placeholder='Enter your Number' value={phone}
                      onChange={(e) => setPhone(e.target.value)} className='p-2 rounded-md bg-white w-full' />
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
              <div className="bg-white border border-gray-100 shadow-2xl rounded-xl p-6 mt-4 space-y-4 h-max">
                <h1 className="text-gray-800 font-bold text-xl border-b pb-3">
                  Bill Details
                </h1>

                {/* Items Total */}
                <div className="flex justify-between items-center text-gray-700">
                  <p className="flex gap-2 items-center">
                    <LuNotebookText /> Items Total
                  </p>
                  <p className="font-medium">₹{totalPrice.toLocaleString("en-IN")}</p>
                </div>

                {/* Delivery */}
                <div className="flex justify-between items-center">
                  <p className="flex gap-2 items-center text-gray-700">
                    <MdDeliveryDining /> Delivery Charges
                  </p>
                  <p className="text-green-600 font-semibold">
                    <span className="line-through text-gray-400 mr-1">₹25</span> FREE
                  </p>
                </div>

                {/* Handling */}
                <div className="flex justify-between items-center text-gray-700">
                  <p className="flex gap-2 items-center">
                    <GiShoppingBag /> Handling Charges
                  </p>
                  <p className="font-medium">₹7</p>
                </div>

                <hr className="border-gray-200" />

                {/* Grand Total */}
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <h1 className="font-bold text-lg text-gray-800">Total Amount</h1>
                  <p className="font-bold text-lg text-red-500">
                    ₹{(totalPrice + 7).toLocaleString("en-IN")}
                  </p>
                </div>


                {/* Payment Method */}
                <div className="mt-6">
                  <h2 className="font-semibold text-gray-800 mb-3">
                    Payment Method
                  </h2>
                  <div className="space-y-3">
                    <label className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer
                        ${paymentMethod === "COD" ? "border-red-500 bg-red-50" : "border-gray-200"}`}>
                      <input type="radio" name="payment" checked={paymentMethod === "COD"}
                        onChange={() => setPaymentMethod("COD")} />
                      <span className="font-medium">Cash on Delivery</span>
                    </label>

                    <label className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer
                       ${paymentMethod === "ONLINE" ? "border-red-500 bg-red-50" : "border-gray-200"}`}>
                      <input type="radio" name="payment" checked={paymentMethod === "ONLINE"}
                        onChange={() => setPaymentMethod("ONLINE")} />
                      <span className="font-medium">Online Payment (Card / UPI)</span>
                    </label>

                  </div>
                </div>
                {/* checked */}
                <button
                  onClick={handlePlaceOrder}
                  disabled={!paymentMethod}
                  className={`w-full mt-5 py-3 rounded-lg font-semibold transition
                   ${paymentMethod
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-gray-300 cursor-not-allowed text-gray-600"
                    }`} >
                  {paymentMethod ? "Proceed to Checkout" : "Select Payment Method"}
                </button>

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
