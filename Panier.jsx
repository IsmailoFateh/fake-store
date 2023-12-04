import React, { useContext } from 'react';
import AuthContext from './AuthContext';

const Panier = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <h1>Panier</h1>
      {isLoggedIn ? (
        <p>Display shopping cart content</p>
      ) : (
        <p>Please login to view the shopping cart.</p>
      )}
    </div>
  );
};

export default Panier;
