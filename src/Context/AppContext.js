import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const Provider = ({ children }) => {
  const [assets, setAssets] = useState('inicial');

  const contextValue = { 
    assets,
    setAssets,
  }

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  )
}
