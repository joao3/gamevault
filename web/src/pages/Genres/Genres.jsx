import React, { useState, useEffect } from 'react';

import './Genres.css';
import Card from '../../components/Card/Card';

const Genres = () => {
  const [ genres, setGenres ] = useState([]);

  useEffect(() => {
    const loadGenres = async () => {
      const response = await fetch(`http://localhost:8000/genres`);
      if (response.status === 200) {
        const data = await response.json();
        setGenres(data);
      }
    };

    loadGenres();
  }, []);

  return (
    <main className='genresContainer'>
     <h1>Genres</h1>
     
     { genres.length > 0 && 
      <div className='genres'>
        {
          genres.map((genre) => 
            <Card
              id={genre.slug}
              title={genre.name}
              link=''
            />
          )
        }
      </div>
     }
    
    </main>
  );
};

export default Genres;