import React from "react";
import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import { Main } from "./components/Main";
import { Play } from "./components/game/Play";
import { Menu } from "./components/Menu";
import { Settings } from "./components/Settings";
import { Login } from "./components/Login";
import { Score } from "./components/Score";

function App() {
 
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Menu />} />
          <Route path="/game" element={<Play />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/records" element={<Score />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
