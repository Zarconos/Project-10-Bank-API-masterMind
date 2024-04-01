import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { selectStore } from '../redux/selector';
import { userProfile } from '../redux/action';
import ChangeName from '../components/changeName';
import AccountSection from '../components/AccountSection';

function User() {
  const user = useSelector(selectStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userProfile(user.authToken));
  }, [dispatch, user.authToken]);

  console.log('User data from Redux store:', user); // Vérifie les données de l'utilisateur dans le Redux store

  const { firstName, lastName } = user.user;

  return (
    <div>
      <Header navigate={navigate}/>
      <main className="main bg-dark">
        <div className="main-content">
          <div className="header">
            <h1>
              Welcome back<br />
              {`${firstName}  ${lastName}`}!
            </h1>
            <ChangeName />
          </div>

          <h2 className="sr-only">Accounts</h2>
                    <AccountSection
                        title="Argent Bank Checking"
                        accountNumber="x8349"
                        amount="$2,082.79"
                        description="Available Balance"
                    />
                    <AccountSection
                        title="Argent Bank Savings"
                        accountNumber="x6712"
                        amount="$10,928.42"
                        description="Available Balance"
                    />
                    <AccountSection
                        title="Argent Bank Credit Card"
                        accountNumber="x8349"
                        amount="$184.30"
                        description="Current Balance"
                    />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default User;