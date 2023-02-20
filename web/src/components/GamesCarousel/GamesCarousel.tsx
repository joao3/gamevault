import './GamesCarousel.css'

import React, { useState } from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const GamesCarousel = ({ games }: { games: Array<string> }) => {
  
  const initialMarginLeft = 53;
  const [deslocationX, setDeslocationX] = useState(initialMarginLeft);

  const step = window.innerWidth / 3;

  const leftArrow = () => {
    let newDeslocation = deslocationX + step;
    console.log(newDeslocation);
    setDeslocationX(newDeslocation > initialMarginLeft ? initialMarginLeft : newDeslocation);
  }

  const rightArrow = () => {
    let newDeslocation = deslocationX - step;
    
    const screenWidth = window.innerWidth;
    const cardWidth = 222;
    const carouselCardsWidth = cardWidth * games.length;
    const endX = carouselCardsWidth - screenWidth + initialMarginLeft;

    if (carouselCardsWidth + 2 * initialMarginLeft > screenWidth) {
      setDeslocationX(newDeslocation < -endX ? -endX : newDeslocation);
    }
    
  }

  return (
    <section className='gamesCarousel'>
      <div className='title'>
        <div className='decoration'></div>
        <h2>Popular</h2>
      </div>

      <div className='carouselContainer'>
        <div className='button left' onClick={leftArrow}>
          <ChevronLeftIcon className='buttonIcon' />
        </div>

        <div className='button right' onClick={rightArrow}>
          <ChevronRightIcon className='buttonIcon' />
        </div>

        <div className='carousel' style={{'marginLeft': deslocationX}}>
          {games.map(coverUrl => <img src={coverUrl} alt=''></img>)}
        </div>
      </div>
    </section>
  );
};

export default GamesCarousel;