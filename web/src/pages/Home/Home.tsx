import React from 'react';

import Header from '../../components/Header/Header';
import FeaturedGame from '../../components/FeaturedGame/FeaturedGame';
import GamesCarousel from '../../components/GamesCarousel/GamesCarousel';

import './Home.css';

const Home = () => {
  const games = [];
  for (let i = 0; i < 20; i++) {
    games.push("https://images.igdb.com/igdb/image/upload/t_720p/co2gn3.jpg");
  }

  return (
    <>
      <Header />
      <FeaturedGame />
      <GamesCarousel games={games} />
      <GamesCarousel games={games} />
      <GamesCarousel games={games} />
    </>
  );
}

export default Home;