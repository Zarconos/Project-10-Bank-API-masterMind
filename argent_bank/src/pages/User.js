// User.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../img/argentBankLogo.png";
import { selectStore } from '../redux/selector';
import { userProfile } from '../redux/action';
import { logout } from '../redux/reducers';
import ChangeName from '../components/changeName';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function User() {
  const user = useSelector(selectStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userProfile(user.authToken));
  }, [dispatch, user.authToken]);

  console.log('User data from Redux store:', user); // Vérifie les données de l'utilisateur dans le Redux store

  const { firstName, lastName } = user.user;

  const handleLogout = () => {
    // Dispatch l'action de déconnexion
    dispatch(logout());
    // Redirige l'utilisateur vers la page d'accueil ou toute autre page appropriée
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
        <div className="main-nav-top-right">
          <button className="main-nav-item" onClick={() => navigate('/user')}>
              
              <FontAwesomeIcon icon={faUser} />
              {firstName}
          </button>
          <button className="main-nav-item" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              Sign Out
          </button>
      </div>
      </nav>
      <main className="main bg-dark">
        <div className="main-content">
        <div className="header">
        <h1>
              Welcome back<br />
              {`${firstName}  ${lastName}`}

              !
            </h1>
        <ChangeName />
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
            <section className="account-bottom">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
            </div>
            </main>
      <Footer />
    </div>
  );
};

export default User;
