import React, { useContext, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import LoggedInContext from '../../contexts/LoggedInContext';

import Main from '../../pages/Main';

import './App.css';

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);
  const loggedInValue = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn, setIsLoggedIn]);

  return (
    <div className="app">
      <LoggedInContext.Provider value={loggedInValue}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </LoggedInContext.Provider>
    </div>
  );
}

export default App;
