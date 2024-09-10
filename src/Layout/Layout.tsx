import React from 'react'
import SidePan from './SidePan';
import MainContent from './MainContent';

const Layout = () => {
  return (
    <div style={{display: 'flex'}}>
        <SidePan />
        <MainContent />
    </div>
  )
}

export default Layout