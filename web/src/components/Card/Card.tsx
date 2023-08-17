import './Card.css'

import React from 'react';

import { Link } from 'react-router-dom';

type props = {
  id: number,
  title: string,
  link: string,
  imageLink?: string | null | undefined
}

const Card = (props: props) => {
  return (
    <Link to={props.link} key={props.id} className='cardLink'>
      {props.imageLink ?
        <img src={props.imageLink} alt=''></img> :
        <div className='cardTitle'><h3>{props.title}</h3></div>}
    </Link>
  );
}

export default Card;
