import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

import './Search.css';

const Search = () => {
  const [searchPrams] = useSearchParams();
  const searchQuery = searchPrams.get('name');

  const [gamesData, setGamesData] = useState<any>({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const loadGamesData = async () => {
      const response = await fetch(`http://localhost:8000/games/search?name=${searchQuery}`);

      if (response.status === 200) {
        const data = await response.json();
        setGamesData(data);
        setDataLoaded(true);
      }
    };

    loadGamesData();
  }, [searchQuery]);

  return (
    <>
      <main className='searchContent'>
        <h1>{`Results for "${searchQuery}".`}</h1>

        {dataLoaded &&

          <div className='games'>
            {
              gamesData.map((game: { id: number, name: string, cover: { id: number, image_id: string } }) =>
                <Link to={`/games/${game.id}`} key={game.id} className='gameCardLink'>
                  {game.cover ?
                    <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`} alt=''></img> :
                    <div className='gameTitleCard'><h3>{game.name}</h3></div>}
                </Link>
              )
            }
          </div>

        }
      </main>
      <Footer />
    </>
  );
};

export default Search;