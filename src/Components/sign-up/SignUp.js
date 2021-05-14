import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Input from "../../Components/controls/Input";
import { useForm, Form } from "../Form/useForm";
import useStyles from "./Signup.styles";

import { auth, createUserProfileDocument } from "../../Firebase/Firebase.utils";

const initialFValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const classes = useStyles();
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("displayName" in fieldValues)
      temp.displayName = fieldValues.displayName
        ? ""
        : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("password" in fieldValues)
      temp.password =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,10}$/.test(
          fieldValues.password
        )
          ? ""
          : "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character required";
    if ("confirmPassword" in fieldValues)
      temp.confirmPassword =
        fieldValues.confirmPassword === values.password
          ? ""
          : "Password didn't matched!";
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

  const handleSubmit = async (event) => {
    const { displayName, email, password } = values;
    event.preventDefault();
    if (validate()) {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserProfileDocument(user, { displayName });
      } catch (error) {
        alert(error);
      }
      resetForm();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11} lg={9} className={classes.item}>
          <Typography variant="h6" style={{ marginBottom: "20px" }}>
            Create a new account
          </Typography>
          <Input
            label="Full Name"
            name="displayName"
            value={values.displayName}
            onChange={handleInputChange}
            error={errors.displayName}
          />
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
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleInputChange}
            error={errors.confirmPassword}
          />

          <Button type="submit">Sign Up</Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default SignUp;
