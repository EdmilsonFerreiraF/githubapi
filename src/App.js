import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router';
import LoggedContext from './context/LoggedContext';
import MainAppBar from './components/MainAppBar/MainAppBar'
import './scss/custom.scss';

function App() {
  const [logged, setLogged] = useState(localStorage.getItem("token") ? true : false)

  const loggedContext = {logged, setLogged}

  return (
    <div className="App">
      <BrowserRouter>
        <LoggedContext.Provider value={loggedContext}>
          <MainAppBar />
          <Router />
        </LoggedContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;