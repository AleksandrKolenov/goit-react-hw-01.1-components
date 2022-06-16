// import React from 'react';
// import  from 'react-dom';
// import './index.css';
import React from 'react';
 import {createRoot} from 'react-dom/client'
import App from './App';
// import {ThemeProvider} from '@emotion/react'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(<App />, document.querySelector('#root'));