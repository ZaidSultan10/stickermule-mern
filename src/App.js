import React from 'react'
import './App.scss';
import Navbar from './components/navbar/Navbar';
import LandingPage from './pages/landingPage/LandingPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />}>
            </Route>
            <Route path="login" element={<Login />}>
            </Route>
            {/* <Route path="course/:id" element={<CourseContent />}>
            </Route> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
