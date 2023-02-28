import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Survey from '../pages/Survey/Survey';
import Admin from '../pages/Admin/Admin';
import Results from '../pages/Results/Results';
import Freelances from '../pages/Freelances/Freelances';
import Tests from '../pages/Tests/Test';

import Dashboard from './Dashboard';
import Settings from './Settings';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/survey/:questionNumber" element={<Survey />} />
      
      <Route path="/results" element={<Results />} />
      
      <Route path="/freelances" element={<Freelances />} />
      
      <Route path="/tests" element={<Tests />} />

      <Route path="/admin" element={<Admin />} >
        <Route path={`dashboard`} element={<Dashboard />} />
        <Route path={`settings`} element={<Settings />} />
      </Route>

      <Route path={`*`} element={<Error />}/>

    </Routes> 
  )
}
