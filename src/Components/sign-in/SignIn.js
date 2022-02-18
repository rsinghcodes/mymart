import React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Button, Grid, Typography } from '@material-ui/core';

import Input from '../../Components/controls/Input';
import ResetPassword from '../../Components/ResetPassword/ResetPassword';
import { auth, signInWithGoogle } from '../../Firebase/Firebase.utils';
import useStyles from './SignIn.styles';

const SignIn = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const style = {
    marginBottom: '10px',
    marginRight: '10px',
  };

  const handlePasswordDialogOpen = () => {
    setOpen(true);
  };
  const handlePasswordDialogClose = () => {
    setOpen(false);
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email is not valid')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      const { email, password } = values;
      await auth.signInWithEmailAndPassword(email, password).catch((error) => {
        alert(error);
      });
    },
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  return (
    <>
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
                Login to your account
              </Typography>
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

              <Button
                variant="contained"
                color="primary"
                disableElevation
                type="submit"
                style={style}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                style={style}
                onClick={handlePasswordDialogOpen}
              >
                Forgot Password ?
              </Button>
              <Button style={style} onClick={signInWithGoogle}>
                <img
                  width="20px"
                  style={{ marginRight: '10px' }}
                  alt="Sign-in with Google"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                />
                Sign-in with Google
              </Button>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
      <ResetPassword
        handlePasswordDialogOpen={handlePasswordDialogOpen}
        handlePasswordDialogClose={handlePasswordDialogClose}
        open={open}
      />
    </>
  );
};

export default SignIn;
