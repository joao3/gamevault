import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

import './Search.css';
import Card from '../../components/Card/Card';

const Search = () => {
  const [searchPrams] = useSearchParams();
  const searchQuery = searchPrams.get('name');
  const [currentPage, setCurrentPage] = useState(1);

  const [gamesData, setGamesData] = useState<any>([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const preveSearcgParamsRef = useRef(searchQuery);

  const [gamesAreOver, setGamesAreOver] = useState(false);

  const resetStates = () => {
    setDataLoaded(false);
    setCurrentPage(1);
    setGamesData([]);
  }

  useEffect(() => {
    if (!isFirstLoad && searchQuery !== preveSearcgParamsRef.current) {
      resetStates();
    }
    setIsFirstLoad(false);
    preveSearcgParamsRef.current = searchQuery;
  }, [searchQuery]);

  useEffect(() => {
    const loadGamesData = async () => {
      const response = await fetch(`http://localhost:8000/games/search?name=${searchQuery}&page=${currentPage}`);
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
  }, [searchQuery, currentPage]);

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
      <main className='searchContent'>
        <h1>{`Results for "${searchQuery}".`}</h1>

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
      <Footer />
    </>
  );
};

export default Search;