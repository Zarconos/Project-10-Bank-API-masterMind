import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import { selectStore } from './redux/selector';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const { isLoggedIn } = useSelector(selectStore);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/signin"
        element={isLoggedIn ? <Navigate to="/user" /> : <SignIn />}
      />
      <Route
        path="/user"
        element={isLoggedIn ? <User /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

library.add(fas);

export default App;


