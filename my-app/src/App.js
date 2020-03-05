import React from 'react';
import Home from './Home.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import CreateGame from './Components/CreateGame.js/index.js';

function App() {
  return (
    <div className="App">
      {/* In the future we'll need to set up a react router here */}
      <div className="Home">
        <Navbar />
        <Home />
        <Footer />
      </div>
      <div className="CreateGame">
        <Navbar/>
        <CreateGame/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
