// SignIn.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../api/api'; // Suppose que loginUser est une action Redux
import { selectStore } from '../redux/selector';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    const user = useSelector(selectStore);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(userLogin({ email, password }));
    };

    useEffect(() => {
        if (user.isLoggedIn) {
            navigate('/user');
        }
    }, [user.isLoggedIn, navigate]);



return (
  <div>
  <Header />
  <main className="main bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
  <form className="login-form" onSubmit={handleSubmit}>
      <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
      />
      <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
      />
      <button className="sign-in-button" type="submit">
          Sign In
      </button>
  </form>
  </section>
      </main>
      <Footer />
    </div>
);
}

export default Login;
