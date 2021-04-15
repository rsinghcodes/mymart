// import { Link } from "react-router-dom";
import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Input from "../../Components/controls/Input";
import Form from "../Form/Form";

const SignIn = () => {
  const style = {
    marginBottom: "10px",
    marginRight: "10px",
  };

  return (
    <Form>
      <Grid
        container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Grid item xs={10} lg={8}>
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
            // value={values.password}
            // onChange={handleInputChange}
            // error={errors.password}
          />

          <Button type="submit" style={style}>
            Sign In
          </Button>
          <Button type="submit" style={style}>
            Login with Google
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default SignIn;
