import React from 'react';

import Header from '../../components/Header/Header';
import FeaturedGame from '../../components/FeaturedGame/FeaturedGame';

import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <FeaturedGame />
      <div style={{'height': '500px'}}></div>
    </>
  );
}

export default Home;