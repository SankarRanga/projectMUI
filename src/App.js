import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { LoginPage } from './page/loginpage';
import { useAppContext } from './provider/appProvider';
import MainTabs from './mainTabs';
import { SignUpPage } from './page/signup';
import { green, orange, purple } from '@mui/material/colors';

function App() {
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
    status: {
      danger: orange[500],
    },
  });
  const {user} = useAppContext();

  const redirectLogin = () => {
     return (<Navigate  to='/login'  />);
  }

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" Component={LoginPage}></Route >
            <Route exact path="/signup" Component={SignUpPage}></Route >
            <Route exact path="/*" Component={Object.keys(user).length ? MainTabs : redirectLogin} ></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
