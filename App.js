// App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Accueil from './Accueil';
import Contact from './Contact';
import ArticleDetails from './ArticleDetails';
import Panier from './Panier';
import NavBar from './NavBar';
import AuthContext from './AuthContext';
import Login from './Login';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router forceRefresh={true}>
      <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
        <NavBar />
        <Switch>
          <Route path="/accueil" component={Accueil} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/article/:id" component={ArticleDetails} />
          {isLoggedIn ? (
            <Route path="/panier" component={Panier} />
          ) : (
            <Redirect to="/accueil" />
          )}
          
          <Redirect exact from="/" to="/accueil" />
        </Switch>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
