import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Accueil = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiEndpoint = 'https://fakestoreapi.com/products';
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="accueil-container">
      <h1>Accueil</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <Link to={`/article/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-overlay">
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <Link to="/panier">
                    <button className="product-button">Add to Cart</button>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accueil;
