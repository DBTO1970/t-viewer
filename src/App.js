import Video from './components/VideoComponent';
import SocialPanel from './components/SocialComponent';
import ToolsPanel from './components/ToolsComponent';
import HeaderPanel from './components/HeaderComponent.js';
import FooterPanel from './components/FooterComponent.js';


import './App.css';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <HeaderPanel />
      <SocialPanel />
      <Video />
      <ToolsPanel />
      <FooterPanel />
    </React.Fragment>
  );
}

export default App;
