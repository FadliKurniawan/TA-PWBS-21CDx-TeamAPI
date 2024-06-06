/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import axios from '../lib/axios';

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  stock: number;
  description: string;
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <img src={`http://localhost:8000${product.image}`} alt={product.name} className="w-full h-48 object-cover mb-2" />
            <p>{product.description}</p>
            <p className="font-bold">Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
