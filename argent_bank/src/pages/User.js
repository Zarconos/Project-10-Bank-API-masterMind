// User.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../img/argentBankLogo.png";
import { selectStore } from '../redux/selector';
import { userProfile } from '../api/api'; // Assurez-vous d'importer userProfile depuis les actions Redux


function User() {
  const user = useSelector(selectStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfile(user.authToken));
  }, [dispatch, user.authToken]);

  console.log('User data from Redux store:', user); // Vérifiez les données de l'utilisateur dans le Redux store

  const { firstName, lastName } = user.user;


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
          
          <button className="main-nav-item" >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
        </div>
      </nav>
      <main className="main bg-dark">
        <div className="header">
      
            <h1>
              Welcome back<br />
              {`${firstName} yo ${lastName}`}

              !
            </h1>
          
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
