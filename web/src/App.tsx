import './Global.css'

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Game />} path="/games/:gameId" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
