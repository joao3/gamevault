import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Game.css';

const Home = () => {
  const { gameId } = useParams();

  const [gameData, setGameData] = useState<any>({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const loadGameData = async () => {
      const response = await fetch(`http://localhost:8000/games/${gameId}`);

      if (response.status === 200) {
        const data = await response.json();
        setGameData(data);
        setDataLoaded(true);
      }
    };

    loadGameData();
  }, [gameId]);

  return (
    <>
      <Header />
      {dataLoaded &&
        <>
          <h1>{gameData.name}</h1>
          <img src={`https://images.igdb.com/igdb/image/upload/t_720p/${gameData.cover.image_id}.jpg`} alt=''></img>
          <p>{gameData.summary}</p>         
        </>}
      <Footer />
    </>
  );
};

export default Home;