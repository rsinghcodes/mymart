import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "../../Components/controls/Input";
import { useForm } from "../Form/useForm";

import { auth } from "../../Firebase/Firebase.utils";
import { useMediaQuery, useTheme } from "@material-ui/core";

const initialFValues = {
  email: "",
};

export default function ResetPassword(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [emailHasBeenSent, setEmailHasBeenSent] = React.useState(false);
  const { handlePasswordDialogClose, open } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Invalid Username!";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialFValues,
    true,
    validate
  );

  const sendResetEmail = (e) => {
    e.preventDefault();
    if (validate()) {
      auth
        .sendPasswordResetEmail(values.email)
        .then(() => {
          setEmailHasBeenSent(true);
          setTimeout(() => {
            setEmailHasBeenSent(false);
          }, 3000);
        })
        .catch(() => {
          console.log("Error resetting password");
        });
      resetForm();
    }
  };

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
        <>
          <DialogContent>
            <DialogContentText>
              Please enter your email address here. We will send you password
              reset email.
            </DialogContentText>
            <Input
              label="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handlePasswordDialogClose}>
              Cancel
            </Button>
            <Button onClick={sendResetEmail}>Send</Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
