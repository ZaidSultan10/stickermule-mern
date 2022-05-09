import React from 'react'
import './App.scss';
import Navbar from './components/navbar/Navbar';
import LandingPage from './pages/landingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
