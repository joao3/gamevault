import './Header.css';

import React from "react";
import { Link, NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <header className="header">


      <Link to='#'>
        <img className="logoHeader" src={width > 1500 ? 'logo.svg' : 'logo-onlyicon.png'} alt="logo" />
      </Link>

      <nav>
        <ul className='navLinks'>
          <li><NavLink to='#'> Home </NavLink></li>
          <li><NavLink to='#'> Genres </NavLink></li>
          <li><NavLink to='#'> Lists </NavLink></li>
          <li><NavLink to='#'> Plataforms </NavLink></li>
        </ul>
      </nav>

      <div className='searchBar'>
        <SearchIcon className='searchIcon' />
        <div className='inputField'>
          <input type="text" placeholder='Search' name="" id="" />
        </div>
      </div>

      <div className='buttons'>
        <button className='signInButton'>Sign In</button>
        <button className='signUpButton'>Sign Up</button>
      </div>

    </header>
  );
}

export default Header;