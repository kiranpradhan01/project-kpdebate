import React from 'react';
import TitleCard from './Components/Home/TitleCard.js';
import HowToPlay from './Components/Home/HowToPlay.js';
import './css/home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="w-70 mx-auto">
        <TitleCard />
        <HowToPlay />
      </div>
    );

  }
}

export default Home;