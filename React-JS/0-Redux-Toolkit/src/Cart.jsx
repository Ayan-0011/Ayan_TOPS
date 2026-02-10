import { useDispatch, useSelector } from "react-redux";
import { increament, decreament, change } from "../Slices/CounterSlice";

const Cart = () => {
  const { number, name } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(change())}>Change</button>
      <h1>{name}</h1>

      <button onClick={() => dispatch(increament())}>Increase</button>
      <h1>{number}</h1>
      <button onClick={() => dispatch(decreament())}>Decrease</button>
    </div>
  );
};

export default Cart;
