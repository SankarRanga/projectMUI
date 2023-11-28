import * as React from 'react';
import { LoginFormView } from '../view/login';
import { useAppContext } from '../provider/appProvider';
import { useNavigate } from 'react-router-dom';
import { LeftView } from '../view/leftView';

export const LoginPage = () => {
    const {setUserDetails, openToast} = useAppContext();
    const navigate = useNavigate();
    const initialValues = { email: "", password: "" };

    const handleSubmit = (values) => {
        setUserDetails(values);
        openToast({ message: "Success!" });
        navigate('/overView');
    }

    return (
        <LeftView>
            <LoginFormView initialValues={initialValues} handleSubmit={handleSubmit} />
        </LeftView>
    );
}