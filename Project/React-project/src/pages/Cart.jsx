import { useUser } from "@clerk/clerk-react";

const Cart = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <p>Loading...</p>;
  if (!isSignedIn) return <p className="text-lg text-red-600 flex justify-center">Please login.....</p>;


  //console.log(user.publicMetadata);

  return (
    <div>
      <h1>Cart Page</h1>
    </div>
  );
};

export default Cart;
