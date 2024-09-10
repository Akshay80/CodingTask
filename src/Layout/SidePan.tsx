import React from 'react';
import Sidebar from '../Components/Sidebar';
import ChartsandMap from '../Components/ChartsandMap';
import Contact from '../Components/Contact';
import { Link } from 'react-router-dom';

const SidePan = () => {
  return (
    <div style={{width: "20%"}}>
      <Link to="/sidebar">Sidebar</Link>
      <Link to="/contact">contact</Link>
      <Link to="/charts-and-map">Charts and Map</Link>
        {/* <Sidebar />
        <ChartsandMap />
        <Contact /> */}
    </div>
  )
}

export default SidePan