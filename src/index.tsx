import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyles } from 'components/common';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
