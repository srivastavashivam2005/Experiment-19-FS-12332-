import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => { setProducts(res.data); setLoading(false); })
      .catch(() => { setError('Failed to fetch products'); setLoading(false); });
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map(p => (
          <li key={p.id} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <strong>{p.name}</strong> - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
