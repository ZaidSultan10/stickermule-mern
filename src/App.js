import React from 'react'
import './App.scss';
import Navbar from './components/navbar/Navbar';
import LandingPage from './pages/landingPage/LandingPage';
import Footer from './components/footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
