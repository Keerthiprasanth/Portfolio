import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index-postcss.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <nav className='max-w-48 p-3 place-content-center content-center left-36'> 
     </nav> */}
  </React.StrictMode>
);

