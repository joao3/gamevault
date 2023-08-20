import React, { useState, useEffect } from 'react';

import './Platforms.css';
import Card from '../../components/Card/Card';

const Platforms = () => {
  const [ platforms, setPlatforms ] = useState([]);

  useEffect(() => {
    const loadPlatforms = async () => {
      const response = await fetch(`http://localhost:8000/platforms`);
      if (response.status === 200) {
        const data = await response.json();
        setPlatforms(data);
      }
    };

    loadPlatforms();
  }, []);

  return (
    <main className='platformsContainer'>
     <h1>Platforms</h1>
     
     { platforms.length > 0 && 
      <div className='platforms'>
        {
          platforms.map((platform) => 
            <Card
              id={platform.slug}
              title={platform.name}
              link=''
            />
          )
        }
      </div>
     }
    </main>
  );
};

export default Platforms;