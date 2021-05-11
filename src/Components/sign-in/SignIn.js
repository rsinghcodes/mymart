import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Input from "../../Components/controls/Input";
import { useForm, Form } from "../Form/useForm";
import useStyles from "./SignIn.styles";

const initialFValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const classes = useStyles();
  const style = {
    marginBottom: "10px",
    marginRight: "10px",
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Invalid Username!";
    if ("password" in fieldValues)
      temp.password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,10}$/.test(
        fieldValues.password
      )
        ? ""
        : "Invalid password!";
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
          <Button style={style}>Login with Google</Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default SignIn;
