import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center text-blue-500">Loading product details...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="bg-blue-200 min-h-screen py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full max-w-md mx-auto rounded-lg mb-4"
        />
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-lg font-semibold text-green-600 mb-4">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;


