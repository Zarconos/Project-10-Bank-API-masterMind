import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userUpdateProfile, profilEdit } from '../redux/action';
import { selectStore } from '../redux/selector';

function ChangeName() {
    const dispatch = useDispatch();
    const user = useSelector(selectStore);

    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSaveChanges = () => {
        if (newFirstName.trim() !== '' && newLastName.trim() !== '') {
            dispatch(userUpdateProfile({ newFirstName, newLastName, token: user.authToken }));
            dispatch(profilEdit());
            setIsEditing(false);
            setErrorMessage(''); // Réinitialiser les messages d'erreur
        } else {
            setErrorMessage('Enregistrement impossible : veuillez renseigner tous les champs.');
        }
    };

    const handleCancelEdit = () => {
        setNewFirstName('');
        setNewLastName('');
        setIsEditing(false);
        setErrorMessage(''); // Réinitialiser les messages d'erreur
    };

    return (
        <div>
            {isEditing ? (
                <div className="user-name">
                    
                    <div className="input-wrapper-user">
                        
                        <input type="text" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} placeholder="John" />
                        <input type="text" value={newLastName} onChange={(e) => setNewLastName(e.target.value)} placeholder="Doe" />
                    </div>
                    <div className="user-name-buttons">

                        <button className="edit-Subbutton" onClick={handleSaveChanges}>Save</button>
                        <button className="edit-Subbutton" onClick={handleCancelEdit}>Cancel</button>

                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
            ) : (
                <div className="user-name">
                    <p>{user.firstName} {user.lastName}</p>
                    <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
                </div>
            )}
        </div>
    );
}

export default ChangeName;
