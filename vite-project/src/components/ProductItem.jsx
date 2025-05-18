import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-2">Price: ${product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-600 hover:underline">
        View Details
      </Link>
      <br />
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
