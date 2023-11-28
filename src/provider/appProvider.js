import { Alert, Snackbar } from '@mui/material';
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [user, setUserDetails] = useState({});
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    message: "",
    severity: "success"
  });
  const { vertical, horizontal, open, message, severity } = state;

  const openToast = (newState) => {
    setState({ ...state, ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <AppContext.Provider value={{ user, setUserDetails, openToast }}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        key={vertical + horizontal}
      ><Alert severity={severity}>{message}</Alert></Snackbar>
    </AppContext.Provider>
  );
}
