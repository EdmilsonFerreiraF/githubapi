import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './scss/custom.scss';
import Router from './routes/Router';
import MainAppBar from './components/MainAppBar/MainAppBar'

function App() {
  return (
    <div className="App px-3">
      <BrowserRouter>
        <MainAppBar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;