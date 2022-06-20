// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import LoginPage from './components/loginForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginPage />
    </div>
  );
}

export default App;
