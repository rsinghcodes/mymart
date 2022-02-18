import * as Yup from 'yup';
import React from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Input from '../../Components/controls/Input';
import { auth } from '../../Firebase/Firebase.utils';
import { useMediaQuery, useTheme } from '@material-ui/core';

export default function ResetPassword(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [emailHasBeenSent, setEmailHasBeenSent] = React.useState(false);
  const { handlePasswordDialogClose, open } = props;

  const ResetSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email is not valid')
      .required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ResetSchema,
    onSubmit: () => {
      const { email } = values;
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          setEmailHasBeenSent(true);
          setTimeout(() => {
            setEmailHasBeenSent(false);
          }, 3000);
        })
        .catch(() => {
          alert('Error resetting password');
        });
    },
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  return (
    <Dialog
      open={open}
      onClose={handlePasswordDialogClose}
      aria-labelledby="form-dialog-title"
      fullScreen={fullScreen}
    >
      <DialogTitle id="form-dialog-title">Reset Password ?</DialogTitle>
      {emailHasBeenSent ? (
        <DialogContent>
          <DialogContentText>
            An email has been sent to your email address.
          </DialogContentText>
        </DialogContent>
      ) : (
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <DialogContent>
              <DialogContentText>
                Please enter your email address here. We will send you password
                reset email.
              </DialogContentText>
              <Input
                label="Email"
                name="email"
                {...getFieldProps('email')}
                error={touched.email && errors.email}
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="secondary"
                autoFocus
                onClick={handlePasswordDialogClose}
                disableElevation
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disableElevation
              >
                Send
              </Button>
            </DialogActions>
          </Form>
        </FormikProvider>
      )}
    </Dialog>
  );
}
