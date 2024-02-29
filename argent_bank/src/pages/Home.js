// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import "../style/main.css";
import chat from "../img/icon-chat.png";
import money from "../img/icon-money.png";
import security from "../img/icon-security.png";

import { useSelector, useDispatch } from 'react-redux';
import { signIn, updateUser } from '../redux/authSlice';
import { users } from '../data/data'; // Import the users array

const Home = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  
  const dispatch = useDispatch();

  const handleSignIn = () => {
    // Dispatch the signIn action with user data
    dispatch(signIn(users[0])); // Sign in with the first user from data.js
  };

  const handleUpdateUser = () => {
    // Dispatch the updateUser action to modify user information
    dispatch(updateUser({ firstName: 'Updated Tony' }));
  };

  const userName = isAuthenticated ? user.firstName : "";
  return (
    <div>
       <Header isAuthenticated={isAuthenticated} userName={userName} />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <div className="feature-item">
            <img src={chat} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className="feature-item">
            <img src={money} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">More savings means higher rates</h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className="feature-item">
            <img src={security} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
        {/* Ajoute une condition pour le lien "Sign Up" en fonction de l'état d'authentification */}
        
        <section className="cta">
          <h2 className="sr-only">Call to Action</h2>
          <p>Join our exclusive membership to receive the latest news and trends.</p>
          {isAuthenticated ? (
            <>
              <Link to="/user" className="cta-button">{`Go to ${userName}'s Profile`}</Link>
              <button className="cta-button" onClick={handleUpdateUser}>Update User</button>
            </>
          ) : (
            <Link to="/signup" className="cta-button" onClick={handleSignIn}>Sign Up Now</Link>
          )}
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default Home;

