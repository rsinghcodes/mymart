import React from 'react';
import * as Yup from 'yup';
import { Button, Grid, Typography } from '@material-ui/core';
import { useFormik, Form, FormikProvider } from 'formik';

import Input from '../../Components/controls/Input';
import useStyles from './Signup.styles';
import { auth, createUserProfileDocument } from '../../Firebase/Firebase.utils';

const SignUp = () => {
  const classes = useStyles();
  const RegisterSchema = Yup.object().shape({
    displayName: Yup.string()
      .min(2, 'Fullname is too Short!')
      .max(50, 'Fullname is too Long!')
      .required('Fullname field is required'),
    email: Yup.string()
      .email('Email is not valid')
      .required('Email field is required'),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        'Minimum six characters, at least one letter and one number'
      )
      .required('Password field is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Password didn't matched!")
      .required('Please Re-Enter Password'),
  });

  const formik = useFormik({
    initialValues: {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async () => {
      const { displayName, email, password } = values;
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserProfileDocument(user, { displayName });
      } catch (error) {
        alert(error.message);
      }
    },
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        style={{ width: '100%' }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={11} lg={9} className={classes.item}>
            <Typography variant="h6" style={{ marginBottom: '20px' }}>
              Create a new account
            </Typography>
            <Input
              label="Full Name"
              name="displayName"
              value={values.displayName}
              {...getFieldProps('displayName')}
              error={touched.displayName && errors.displayName}
            />
            <Input
              label="Email"
              name="email"
              {...getFieldProps('email')}
              error={touched.email && errors.email}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              {...getFieldProps('password')}
              error={touched.password && errors.password}
            />
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              {...getFieldProps('confirmPassword')}
              error={touched.confirmPassword && errors.confirmPassword}
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              disableElevation
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
};

export default SignUp;
