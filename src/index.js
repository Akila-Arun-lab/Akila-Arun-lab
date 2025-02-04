import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWithRouting from './AppWithRouting';
import PropDrilling from './PropDrilling';
import { store } from './app/store'
import { Provider } from 'react-redux';
import NewsStore from './NewsStore';
import CounterRedux from './CounterRedux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*  <AppWithRouting/> */}
   {/* <PropDrilling/ > */}
    {/* <NewsStore/> */}
    <Provider store={store}>
      <CounterRedux/>
    </Provider>
  </React.StrictMode>
);
