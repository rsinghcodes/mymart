import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Input from "../../Components/controls/Input";
import { useForm, Form } from "../Form/useForm";
import useStyles from "./Signup.styles";

const initialFValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = (props) => {
  const classes = useStyles();
  // const { addRecords } = props;
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("password" in fieldValues)
      temp.password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,10}$/.test(
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // addRecords(values);
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
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
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
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleInputChange}
            error={errors.password}
          />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type={values.showPassword ? "text" : "password"}
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
