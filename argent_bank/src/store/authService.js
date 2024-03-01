// authService.js
import axios from 'axios';

export function authenticateUser(email, password) {
  return axios
    .post('http://localhost:3001/api/v1/user/login', { email, password })
    .then(response => {
      const { user, token } = response.data;
      if (token) {
        return { user, token };
      } else {
        return null;
      }
    })
    .catch(error => {
      console.log(error);
      throw error; // throw the error so it can be handled in the component
    });
}

