import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Input from "../../Components/controls/Input";
import { Form } from "../Form/useForm";
import useStyles from "./SignIn.styles";

const SignIn = () => {
  const classes = useStyles();
  const style = {
    marginBottom: "10px",
    marginRight: "10px",
  };

  return (
    <Form>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11} lg={9} className={classes.item}>
          <Typography variant="h6" style={{ marginBottom: "20px" }}>
            Login to your account
          </Typography>
          <Input
            label="Email"
            name="email"
            // value={values.email}
            // onChange={handleInputChange}
            // error={errors.email}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            // value={values.password}
            // onChange={handleInputChange}
            // error={errors.password}
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
