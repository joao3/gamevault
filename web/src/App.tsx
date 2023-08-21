import './Global.css'

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Search from './pages/Search/Search';
import Genres from './pages/Genres/Genres';
import Platforms from './pages/Platforms/Platforms';
import Genre from './pages/Genre/Genre';
import Platform from './pages/Platform/Platform';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Search />} path="/games/search" />
        <Route element={<Game />} path="/games/:gameId" />
        <Route element={<Genres />} path="/genres" />
        <Route element={<Genre />} path="/genres/:genreId" />
        <Route element={<Platforms />} path="/platforms" />
        <Route element={<Platform />} path="/platforms/:platformId" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
