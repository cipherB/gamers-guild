import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import UnauthenticatedRoutes from './UnauthenticatedRoutes';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import ProtectedRoute from '../components/ProtectedRoute';


const RoutesPath = () => {
  const location = useLocation().pathname;
  const toTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    toTop();
  }, [location])

  return (
    <>
    <Routes>
      <Route path="/*" element={<UnauthenticatedRoutes />} />
      <Route path="/me/*" element={<ProtectedRoute><AuthenticatedRoutes /></ProtectedRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
    
    </>
  )
}

export default RoutesPath