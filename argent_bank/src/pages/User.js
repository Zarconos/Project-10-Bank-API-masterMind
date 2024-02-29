// User.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut, updateUser } from '../redux/authSlice';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../img/argentBankLogo.png";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleUpdateUser = () => {
    // Vérifiez que les champs ne sont pas vides avant de mettre à jour
    if (newFirstName.trim() !== '' && newLastName.trim() !== '') {
      // Dispatch l'action pour mettre à jour le nom de l'utilisateur
      dispatch(updateUser({ firstName: newFirstName, lastName: newLastName }));
      // Quitte le mode édition après la mise à jour
      setEditMode(false);
    }
  };

  const handleSignOut = () => {
    // Dispatch l'action de déconnexion
    dispatch(signOut());
    // Navigue vers la page d'accueil après la déconnexion
    navigate('/');
  };

  return (
    <div>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isAuthenticated ? (
            <Link to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              
            </Link>
          ) : null}

          <button className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
        </div>
      </nav>
      <main className="main bg-dark">
        <div className="header">
          {editMode ? (
            <div>
              <input
                type="text"
                placeholder="Enter new first name"
                value="{newFirstName}"
                
              />
              <input
                type="text"
                placeholder="Enter new last name"
                value="{newLastName}"
                
              />
              <button className="edit-button" >
                Update User
              </button>
              <button className="cancel-button" >
                Cancel
              </button>
            </div>
          ) : (
            <h1>
              Welcome back<br />
              !
            </h1>
          )}
        </div>

        <h2 className="sr-only">Accounts</h2>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
            </main>
      <Footer />
    </div>
  );
};

export default User;
