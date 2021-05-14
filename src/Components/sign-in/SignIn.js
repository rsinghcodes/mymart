import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Input from "../../Components/controls/Input";
import ResetPassword from "../../Components/ResetPassword/ResetPassword";
import { useForm, Form } from "../Form/useForm";
import useStyles from "./SignIn.styles";

import { auth, signInWithGoogle } from "../../Firebase/Firebase.utils";

const initialFValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const style = {
    marginBottom: "10px",
    marginRight: "10px",
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("email" in fieldValues)
      temp.email = fieldValues.email ? "" : "This field is required.";
    if ("password" in fieldValues)
      temp.password = fieldValues.password ? "" : "This field is required.";
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

  const handlePasswordDialogOpen = () => {
    setOpen(true);
  };
  const handlePasswordDialogClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    const { email, password } = values;
    e.preventDefault();
    if (validate()) {
      auth.signInWithEmailAndPassword(email, password).catch((error) => {
        alert(error);
      });
      resetForm();
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={11} lg={9} className={classes.item}>
            <Typography variant="h6" style={{ marginBottom: "20px" }}>
              Login to your account
            </Typography>
            <Input
              label="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleInputChange}
              error={errors.password}
            />

            <Button type="submit" style={style}>
              Sign In
            </Button>
            <Button style={style} onClick={handlePasswordDialogOpen}>
              Forgot Password ?
            </Button>
            <Button style={style} onClick={signInWithGoogle}>
              <img
                width="20px"
                style={{ marginRight: "10px" }}
                alt="Sign-in with Google"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              />
              Sign-in with Google
            </Button>
          </Grid>
        </Grid>
      </Form>
      <ResetPassword
        handlePasswordDialogOpen={handlePasswordDialogOpen}
        handlePasswordDialogClose={handlePasswordDialogClose}
        open={open}
      />
    </>
  );
};

export default SignIn;
