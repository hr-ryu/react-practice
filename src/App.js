import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { Main } from './pages/main/main';
import { Sign } from './pages/signin/signin';

import { Header } from './conponents/header/header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exect path="/" element={<Navigate to="/main" />} />
        <Route exect path="/main" element={<Main />} />
        <Route exect path="/sign-in" element={<Sign />} />
      </Routes>
    </Router>
  );
}

export default App;
