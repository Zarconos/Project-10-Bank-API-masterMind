// SignIn.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../redux/action';
import { selectStore } from '../redux/selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { unwrapResult } from '@reduxjs/toolkit';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const user = useSelector(selectStore);
    const dispatch = useDispatch();
    const navigate = useNavigate();

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        setErrorMessage(''); // Réinitialisez les messages d'erreur

        if (email === '' || password === '') {
            setErrorMessage("Veuillez renseigner tous les champs");
            return;
        }

        const resultAction = await dispatch(userLogin({ email, password }));
        const user = unwrapResult(resultAction);
        navigate('/user');
    } catch (error) {
        if (error.message) {
            // Gestion des erreurs renvoyées par l'action
            setErrorMessage(error.message);
        } else {
            // Gestion des erreurs non attendues
            console.error('Error during login:', error);
            setErrorMessage('Votre identifiant et/ou votre mot de passe sont incorrects.'); // Ajoutez cette ligne pour afficher l'erreur inattendue
        }
    }
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
      <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
      <h1>Sign In</h1>
  <form className="login-form" onSubmit={handleSubmit}>
  <div class="input-wrapper">
  <label for="username">Username</label>
      <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div class="input-wrapper">
      <label for="password">Password</label>
      <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
      />
       <div class="input-remember">
            <input type="checkbox" id="remember-me" /><label for="remember-me"
              >Remember me</label>
          </div>
      </div>
      <button className="sign-in-button" type="submit">
          Sign In
      </button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
  </form>
  </section>
      </main>
      <Footer />
    </div>
);
}

export default Login;
