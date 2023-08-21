import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Genre.css';
import Card from '../../components/Card/Card';

const Genre  = () => {
  const { genreId } = useParams();

  const [currentPage, setCurrentPage] = useState(1);

  const [gamesData, setGamesData] = useState<any>([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const [gamesAreOver, setGamesAreOver] = useState(false);

  useEffect(() => {
    const loadGamesData = async () => {
      const response = await fetch(`http://localhost:8000/genres/${genreId}?page=${currentPage}`);
      if (response.status === 200) {
        const data = await response.json();
        if (data.length === 0) {
          setGamesAreOver(true);
        }
        else {
          setGamesData([...gamesData, ...data]);
          setDataLoaded(true);
        }
      }
    };

    loadGamesData();
  }, [currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting) && !gamesAreOver) {
        setCurrentPage((p) => p + 1);
      }
    })

    const observed = document.getElementById('observed');
    if (observed) {
      observer.observe(observed);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className='genreContainer'>
        <h1>{`${genreId}`}</h1>

        {dataLoaded &&

          <div className='games'>
            {
              gamesData.map((game: { id: number, name: string, cover: { id: number, image_id: string } }) =>
                <Card 
                  id={game.id}
                  title={game.name}
                  link={`/games/${game.id}`}
                  imageLink={game.cover ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg` : null} 
                />
              )
            }
          </div>
        }
        <div id='observed'/>
      </main>
    </>
  );
};

export default Genre;