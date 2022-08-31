import { FC } from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  children: any;
}

const ProtectedRoute:FC<Props> = ({ children }) => {
    const { authenticate } = useStateContext();

  if((authenticate?.isAuthenticated === false) || (authenticate?.isAuthenticated === undefined)) {
    return <Navigate replace to={'/login'} />
  }

  return children ? children : <Outlet />
}

export default ProtectedRoute