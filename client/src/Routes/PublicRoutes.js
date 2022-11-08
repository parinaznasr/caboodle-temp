import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {
    Home,
    News,
    Members,
    Projects,
    Grants,
    Admin
} from '../Components/index';

const PublicRoutes = () => {
  return(
    <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/news' element={<News/>} />
            <Route path='/members' element={<Members/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/grants' element={<Grants/>} />
            <Route path='/admin' element={<Admin/>} />
        </Routes>
    </Router>
  );
}

export default PublicRoutes;
