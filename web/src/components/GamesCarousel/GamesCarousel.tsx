import './GamesCarousel.css'

import React, { useState } from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type props = {
  title: string,
  games: Array<{
    id: number,
    name: string,
    cover: {
      id: number,
      image_id: string
    }
  }>
}

const GamesCarousel = (props: props) => {
  const games = props.games;

  const initialMarginLeft = 53;
  const [deslocationX, setDeslocationX] = useState(initialMarginLeft);

  const step = window.innerWidth / 3;

  const leftArrow = () => {
    let newDeslocation = deslocationX + step;
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
        <h2>{props.title}</h2>
      </div>

      <div className='carouselContainer'>
        <div className='button left' onClick={leftArrow}>
          <ChevronLeftIcon className='buttonIcon' />
        </div>

        <div className='button right' onClick={rightArrow}>
          <ChevronRightIcon className='buttonIcon' />
        </div>

        <div className='carousel' style={{ 'marginLeft': deslocationX }}>
          {games.map(game => 
            game.cover && 
            <img key={game.id} src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`} alt=''></img>)}
        </div>
      </div>
    </section>
  );
};

export default GamesCarousel;