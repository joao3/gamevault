import './FeaturedGame.css'

import React from 'react';

const FeaturedGame = () => {


  return (
    <section className='featuredGame' style={{ 'backgroundImage': 'url("https://images.igdb.com/igdb/image/upload/t_1080p/scagdm.jpg")' }}>
      <div className='verticalFade'>
        <div className='info'>
          <h1 className='title'>Elden Ring</h1>
          <p className='description'>Elden Ring is a fantasy, action and open world game with RPG elements such as stats, weapons and spells. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.</p>
        </div>
      </div>

    </section>
  );
}

export default FeaturedGame;