import './Header.css';

import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/games/search?name=${searchValue}`);
  }

  const location = useLocation();
  useEffect(() => {
    setSearchValue("");
  }, [location.pathname]);

  return (
    <header className="header">

      <Link to='/'>
        <img className="logoHeader" src={width > 1510 ? `${process.env.PUBLIC_URL}/logo.svg` : `${process.env.PUBLIC_URL}/logo-onlyicon.png`} alt="logo" />
      </Link>

      <nav>
        <ul className='navLinks'>
          <li><NavLink to='/'> Home </NavLink></li>
          <li><NavLink to='#'> Lists </NavLink></li>
          <li><NavLink to='/genres'> Genres </NavLink></li>
          <li><NavLink to='/platforms'> Platforms </NavLink></li>
        </ul>
      </nav>

      <form className='searchBar' onSubmit={(e) => handleSearch(e)}>
        <button className='searchButton'>
          <SearchIcon className='searchIcon' />
        </button>
        <div className='inputField'>
          <input type="text" value={searchValue} placeholder='Search' name="search" onChange={(e) => setSearchValue(e.target.value)} />
        </div>
      </form>

      <div className='buttons'>
        <button className='signInButton'>Sign In</button>
        <button className='signUpButton'>Sign Up</button>
      </div>

    </header>
  );
}

export default Header;