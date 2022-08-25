import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UnauthenticatedRoutes from './UnauthenticatedRoutes';


const routes = () => {
  return (
    <>
    <Routes>
      <Route path="/*" element={<UnauthenticatedRoutes />} />
    </Routes>
    
    </>
  )
}

export default routes