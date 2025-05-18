import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white flex flex-col">
      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-600 mb-2">Price: ${item.price}</p>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="mt-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;

