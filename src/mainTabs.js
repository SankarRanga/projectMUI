import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './page/home';
import AppDrawerBar from './component/appDrawerBar';
import { useAppContext } from './provider/appProvider';
import { CustomersPage } from './page/customers';
import { BusinessPage } from './page/business';

function MainTabs() {
    const {user} = useAppContext();

    return (
        <AppDrawerBar>
            <Routes>
            <Route exact path="/overView" Component={HomePage}></Route >
            <Route exact path="/customers" Component={CustomersPage}></Route >
            <Route exact path="/companies" Component={BusinessPage}></Route >
          </Routes>
        </AppDrawerBar>
    );
}

export default MainTabs;
