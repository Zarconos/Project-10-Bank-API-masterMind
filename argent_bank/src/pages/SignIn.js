// SignIn.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../redux/authSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { authenticateUser } from '../redux/authService';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Utilisez useNavigate pour gérer la navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    const user = authenticateUser(email, password);

    if (user) {
      dispatch(signIn());

      // Utilisez 'navigate' pour rediriger l'utilisateur vers la page User après l'authentification réussie
      navigate('/user');
    } else {
      console.log('Authentication failed. Please check your email and password.');
    }
  };

  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="button" className="sign-in-button" onClick={handleSignIn}>
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
