import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import UnauthenticatedRoutes from './UnauthenticatedRoutes';


const routes = () => {
  return (
    <>
    <Routes>
      <Route path="/*" element={<UnauthenticatedRoutes />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
    
    </>
  )
}

export default routes