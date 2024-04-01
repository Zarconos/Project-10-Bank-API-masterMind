// SignIn.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../redux/action';
import { selectStore } from '../redux/selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const user = useSelector(selectStore);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Vérifier si l'utilisateur est déjà connecté
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            // Effacer le token dans le local storage
            localStorage.removeItem('authToken');
            // Rediriger l'utilisateur vers la page d'accueil
            navigate('/');
        }


    }, [navigate, user.isLoggedIn, user.user.email]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setErrorMessage(''); // Réinitialisez les messages d'erreur
            if (email === '' || password === '') {
                setErrorMessage("Veuillez renseigner tous les champs");
                return;
            }

            await dispatch(userLogin({ email, password }));
            navigate('/user');

        } catch (error) {
            if (error.message) {
                setErrorMessage(error.message);
            } else {
                console.error('Error during login:', error);
                setErrorMessage('Votre identifiant et/ou votre mot de passe sont incorrects.');
            }
        }
    };

    return (
        <div>
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
                    <h1>Sign In</h1>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div class="input-wrapper">
                            <label for="email">Email</label>
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
