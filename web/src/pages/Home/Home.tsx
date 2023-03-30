import React, { useState, useEffect } from 'react';

import FeaturedGame from '../../components/FeaturedGame/FeaturedGame';
import GamesCarousel from '../../components/GamesCarousel/GamesCarousel';
import Footer from '../../components/Footer/Footer';

import './Home.css';

const Home = () => {
  const [popularGames, setPopularGames] = useState([]);
  const [recentlyReleasedGames, setRecentlyReleasedGames] = useState([]);
  const [comingSoonGames, setComingSoonGames] = useState([]);

  useEffect(() => {
    const loadPopularGames = async () => {
      const response = await fetch('http://localhost:8000/games/popular');

      if (response.status === 200) {
        const data = await response.json();
        setPopularGames(data);
      }
    };

    const loadRecentlyReleasedGames = async () => {
      const response = await fetch('http://localhost:8000/games/recently-released');

      if (response.status === 200) {
        const data = await response.json();
        setRecentlyReleasedGames(data);
      }
    };

    const loadComingSoonGames = async () => {
      const response = await fetch('http://localhost:8000/games/coming-soon');

      if (response.status === 200) {
        const data = await response.json();
        setComingSoonGames(data);
      }
    };

    loadPopularGames();
    loadRecentlyReleasedGames();
    loadComingSoonGames();
  }, []);


  return (
    <>
      <FeaturedGame />
      <GamesCarousel title='Popular' games={popularGames} />
      <GamesCarousel title='Recently Released' games={recentlyReleasedGames} />
      <GamesCarousel title='Coming Soon' games={comingSoonGames} />

      <Footer />
    </>
  );
};

export default Home;