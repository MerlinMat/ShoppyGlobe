import { useState } from 'react';
import { useFetchProducts } from '../hooks/useProducts';  
import ProductItem from './ProductItem';

const ProductList = () => {
  const { products, error, loading } = useFetchProducts();
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center text-blue-500">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="bg-yellow-50 min-h-screen p-4">
      <h2 className="m-3 text-2xl font-bold">Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/*  Grid of 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
