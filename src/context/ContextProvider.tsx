import React, { useState, useContext, createContext, FC } from 'react'
import Cookies from 'js-cookie';

const StateContext = createContext<any>(null);

// Check if authentication cookies is available
const authInitial = {
  auth: typeof Cookies.get('auth') === 'string' ? JSON.parse(Cookies.get('auth') || '{}') : {}
}

interface Props {
  children: any;
}

export const ContextProvider:FC<Props> = ({children}) => {
  const [authenticate, setAuthenticate] = useState<any>(authInitial.auth)

  return (
    <StateContext.Provider value={{ authenticate, setAuthenticate }} >
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);

