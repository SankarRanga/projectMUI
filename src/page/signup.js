import * as React from 'react';
import { SignUpFormView } from '../view/signup';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../provider/appProvider';
import { LeftView } from '../view/leftView';

export const SignUpPage = () => {
    const {openToast} = useAppContext();
    const initialValues = { firstName: "", LastName: "", middleName: "", email: "", password: "", confirmPassword: "" };
    const navigate = useNavigate();

    const handleSubmit = () => {
        openToast({ message: "Success!" })
        navigate('/login');
    }

    return (
       <LeftView>
           <SignUpFormView initialValues={initialValues} handleSubmit={handleSubmit} />
       </LeftView>
    );
}