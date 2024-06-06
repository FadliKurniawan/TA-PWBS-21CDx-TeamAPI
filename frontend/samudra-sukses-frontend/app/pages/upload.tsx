import { useState } from 'react';
import axios from '../lib/axios';

const Upload = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image as Blob);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('description', description);

    try {
      const response = await axios.post('/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      alert('Product uploaded successfully');
    } catch (error) {
      console.error('There was an error uploading the product!', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Upload Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block">Image:</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files![0])}
            required
            className="w-full p-2 border rounded"
          />
        </div>      
      </form>
    </div>
)};