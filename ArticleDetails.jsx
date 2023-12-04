import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import AuthContext from './AuthContext';

const ArticleDetails = () => {
  const { id } = useParams();
  const { isLoggedIn } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const history = useHistory();

  useEffect(() => {
   
    const apiEndpoint = `https://fakestoreapi.com/products/${id}`;

   
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  const handleAddToCart = () => {
    if (isLoggedIn) {
     
      console.log('Product added to cart:', product);
      history.push('/panier');
    } else {

      history.push('/login');
    }
  };

  return (
    <div>
      <h1>Article Details</h1>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} className="-image" />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <Link to="/panier">
            <button onClick={handleAddToCart}>Add to Cart</button>
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArticleDetails;
