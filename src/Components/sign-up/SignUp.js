import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Input from "../../Components/controls/Input";
import Form from "../Form/Form";

const SignUp = () => {
  return (
    <Form>
      <Grid
        container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={10} lg={8}>
          <Typography variant="h6" style={{ marginBottom: "20px" }}>
            Create your new account
          </Typography>
          <Input
            label="Name"
            name="visitorname"
            // value={values.visitorname}
            // onChange={handleInputChange}
            // error={errors.visitorname}
          />
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

          <Button type="submit">Sign Up</Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default SignUp;
