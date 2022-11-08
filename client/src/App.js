import React, { useEffect } from 'react';
import PublicRoutes from './Routes/PublicRoutes';
import './styles/App.css';
import GlobalStyles from './styles/GlobalStyles.js';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <PublicRoutes />
    </React.Fragment>
  )
}

export default App;

