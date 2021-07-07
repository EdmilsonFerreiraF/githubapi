import React from 'react'
import './scss/custom.scss';
import MainAppBar from './components/MainAppBar/MainAppBar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App px-3">
      <BrowserRouter>
        <MainAppBar />
      </BrowserRouter>
    </div>
  );
}

export default App;