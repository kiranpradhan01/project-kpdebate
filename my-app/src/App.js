import React from 'react';
import logo from './logo.svg';
import Home from './Home.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      {/* In the future we'll need to set up a react router here */}
      <Navbar />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
