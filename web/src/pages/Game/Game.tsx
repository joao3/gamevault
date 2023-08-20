import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
      {dataLoaded &&
        <main className='gameContent'>
          <h1>{gameData.name}</h1>

          <img src={`https://images.igdb.com/igdb/image/upload/t_720p/${gameData.cover.image_id}.jpg`} alt=''></img>

          <h2>Genres</h2>
          <ul>
            {gameData.genres.map((genre: { id: number, name: string }) => <li key={genre.id}>{genre.name}</li>)}
          </ul>

          <h2>Platforms</h2>
          <ul>
            {gameData.platforms.map((platform: { id: number, name: string }) => <li key={platform.id}>{platform.name}</li>)}
          </ul>

          <h2>Description</h2>
          <p>{gameData.summary}</p>
        </main>}
    </>
  );
};

export default Home;