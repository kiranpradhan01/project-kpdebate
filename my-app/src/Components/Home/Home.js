import React from 'react';
import TitleCard from './TitleCard.js';
import HowToPlay from './HowToPlay.js';
import '../../css/home.css';

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