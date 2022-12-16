import React, { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoggedInContext from '../../contexts/LoggedInContext';
import Main from '../../pages/Main';
import styles from './App.module.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInValue = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn, setIsLoggedIn]);

  return (
    <div className={styles.base}>
      <LoggedInContext.Provider value={loggedInValue}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </LoggedInContext.Provider>
    </div>
  );
}

export default App;
