import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext';


const NavBar = ({ cartCount }) => {
  const { isLoggedIn, userName, handleLogout } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/accueil">Accueil</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/panier">Panier ({cartCount})</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <span>Welcome, {userName}!</span>
              <span className="login-indicator">Logged In</span>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
