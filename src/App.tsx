import React from 'react';
import './App.css';
import Layout from './Layout/Layout'
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Sidebar from './Components/Sidebar';
import ChartsandMap from './Components/ChartsandMap';

const App = () => {
  <Routes>
    <Route element={<Contact />} path='/contact' />
    <Route element={<Sidebar />} path='/sidebar' />
    <Route element={<ChartsandMap />} path='/charts-and-map' />
   </Routes>
  return (
    <div>
     <Layout />
    </div>
  );
}

export default App;
