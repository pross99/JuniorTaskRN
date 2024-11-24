import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import Header from "./components/Header/Header";
import Home from './components/pages/Home';
import {Routes, Route} from 'react-router-dom';
import { ItemsProvider } from './context/ItemContext';
import { BasketProvider } from './context/BasketContext';
function App() {

  return (
    <ItemsProvider>
      <BasketProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes> 
      </BasketProvider>
    </ItemsProvider>
  );
}

export default App;
