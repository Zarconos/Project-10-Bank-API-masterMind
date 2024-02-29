// authService.js
import { users } from './data';

export const authenticateUser = (email, password) => {
  const user = users.find(u => u.email === email && u.password === password);
  return user;
};
