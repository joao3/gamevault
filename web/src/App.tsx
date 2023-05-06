import './Global.css'

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game"
import Header from './components/Header/Header';
import Search from './pages/Search/Search';

const App = () => {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Search />} path="/games/search" />
        <Route element={<Game />} path="/games/:gameId" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
