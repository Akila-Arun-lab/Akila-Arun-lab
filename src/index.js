import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWithRouting from './AppWithRouting';
import PropDrilling from './PropDrilling';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AppWithRouting/>
   {/* <PropDrilling/ > */}
    {/* <NewsStore/> */}
  </React.StrictMode>
);
