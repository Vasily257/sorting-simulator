import { createContext } from 'react';

const LoggedInContext = createContext({
  isLoggedIn: {},
  setIsLoggedIn: () => {},
});

export default LoggedInContext;
