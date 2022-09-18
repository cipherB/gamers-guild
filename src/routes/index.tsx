import React, { useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import UnauthenticatedRoutes from './UnauthenticatedRoutes';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import ProtectedRoute from '../components/ProtectedRoute';
import { useStateContext } from '../context/ContextProvider';


const RoutesPath = () => {
  const { authenticate } = useStateContext();
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
      <Route path="/login" element={
          (authenticate?.isAuthenticated === true) ?
          <Navigate replace to="/me/" /> : <Login />
        } 
      />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
    
    </>
  )
}

export default RoutesPath