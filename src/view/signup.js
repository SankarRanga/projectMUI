import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Copyright } from '../component/copyright';
import { Formik, Form as FormikForm } from 'formik';
import { CustomTextField } from '../component/customTextField';

export const SignUpFormView = (props) => {

    return (
        <Formik
            initialValues={props.initialValues || {}}
            validate={values => {
                const errors = {};

                if (!values.email) {
                    errors.email = 'Required';
                } else if (!values.firstName) {
                    errors.firstName = 'Required';
                } else if (!values.lastName) {
                    errors.lastName = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                } else if (!values.password) {
                    errors.password = 'Required';
                } else if (values.confirmPassword !== values.password) {
                    errors.confirmPassword = "not matched with password"
                    errors.password = "not matched with confirm password"
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ values, errors, isSubmitting, handleChange, handleSubmit }) => (
                <FormikForm onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Box noValidate sx={{ mt: 1 }}>
                            <CustomTextField
                                margin="normal"
                                required
                                fullWidth
                                type="text"
                                id="firstName"
                                label="First Name"
                                name="firstName"
                                autoComplete="firstName"
                                autoFocus
                                value={values.firstName}
                                error={errors.firstName }
                                helperText={errors.firstName}
                                onChange={handleChange}
                            />
                            <CustomTextField
                                margin="normal"
                                fullWidth
                                type="text"
                                id="middleName"
                                label="Middle Name"
                                name="middleName"
                                autoComplete="middleName"
                                autoFocus
                                value={values.middleName}
                                onChange={handleChange}
                            />
                            <CustomTextField
                                margin="normal"
                                required
                                fullWidth
                                type="text"
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lastName"
                                autoFocus
                                value={values.lastName}
                                error={errors.lastName}
                                helperText={errors.lastName}
                                onChange={handleChange}
                            />
                            <CustomTextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={values.email}
                                error={errors.email }
                                helperText={errors.email}
                                onChange={handleChange}
                            />
                            <CustomTextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={values.password}
                                error={errors.password }
                                helperText={errors.password}
                                onChange={handleChange}
                            />
                            <CustomTextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="confirmPassword"
                                id="confirmPassword"
                                autoComplete="confirmPassword"
                                value={values.confirmPassword}
                                error={errors.confirmPassword }
                                helperText={errors.confirmPassword}
                                onChange={handleChange}
                            />
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        {"have an account? Signin"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </FormikForm>)}
        </Formik>
    );
}