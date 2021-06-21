import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  // FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
} from "@material-ui/core";
import styled from "styled-components";
import Input from "../../Components/controls/Input";
import { useForm, Form } from "../../Components/Form/useForm";
import { ArrowBackIos, Https } from "@material-ui/icons";

import {
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";

const initialFValues = {
  displayName: "",
  phone: "",
  address: "",
  pincode: "",
  state: "",
  city: "",
};

const Shipping = () => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("displayName" in fieldValues)
      temp.displayName = fieldValues.displayName
        ? ""
        : "This field is required.";
    if ("phone" in fieldValues)
      temp.phone = fieldValues.phone
        ? /^[6-9]\d{9}$/.test(fieldValues.phone)
          ? ""
          : "Please enter valid 10-digit phone number."
        : "This field is required.";
    if ("address" in fieldValues)
      temp.address = fieldValues.address ? "" : "This field is required.";

    if ("state" in fieldValues)
      temp.state = fieldValues.state ? "" : "This field is required.";
    if ("city" in fieldValues)
      temp.district = fieldValues.city ? "" : "This field is required.";
    if ("pincode" in fieldValues)
      temp.pincode = fieldValues.pincode
        ? /^[1-9][0-9]{5}$/.test(fieldValues.pincode)
          ? ""
          : "Please enter valid indian pin code."
        : "This field is required.";
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
    // const { displayName, phone, address, pincode, state, city } = values;
    event.preventDefault();
    if (validate()) {
      if (stripe) {
        const pr = stripe.paymentRequest({
          country: "US",
          currency: "usd",
          total: {
            label: "Demo total",
            amount: 6,
          },
          requestPayerName: true,
          requestPayerEmail: true,
        });

        // Check the availability of the Payment Request API.
        pr.canMakePayment().then((result) => {
          if (result) {
            setPaymentRequest(pr);
          }
        });
      }
      resetForm();
    }
  };

  if (paymentRequest) {
    return <PaymentRequestButtonElement options={{ paymentRequest }} />;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11} lg={4}>
          <Typography variant="h6" style={{ marginBottom: "20px" }}>
            Shipping Details
          </Typography>
          <Input
            label="Full Name"
            name="displayName"
            value={values.displayName}
            onChange={handleInputChange}
            error={errors.displayName}
          />
          <Input
            label="Phone"
            name="phone"
            value={values.phone}
            onChange={handleInputChange}
            error={errors.phone}
          />
          <Input
            label="Address"
            name="address"
            value={values.address}
            onChange={handleInputChange}
            error={errors.address}
          />
          <Input
            label="State"
            name="state"
            value={values.state}
            onChange={handleInputChange}
            error={errors.state}
          />
          <Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
            error={errors.city}
          />
          {/* <FormControl
            variant="outlined"
            style={{ width: "100%", marginBottom: "20px" }}
          >
            <InputLabel id="state-select-outlined">State</InputLabel>
            <Select
              labelId="state-select-outlined"
              id="state-select-outlined"
              label="State"
              value={values.state}
              onChange={handleInputChange}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
              <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
              <MenuItem value="Assam">Assam</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="outlined"
            style={{ width: "100%", marginBottom: "20px" }}
          >
            <InputLabel id="city-select-outlined">City</InputLabel>
            <Select
              labelId="city-select-outlined"
              id="city-select-outlined"
              label="City"
              value={values.city}
              onChange={handleInputChange}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Andhra Pradesh">Anantapur</MenuItem>
              <MenuItem value="Arunachal Pradesh">Chittoor</MenuItem>
              <MenuItem value="Assam">East Godavari</MenuItem>
            </Select>
          </FormControl> */}
          <Input
            label="Pin Code"
            name="pincode"
            value={values.pincode}
            onChange={handleInputChange}
            error={errors.pincode}
          />

          <ButtonContainer>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              startIcon={<ArrowBackIos />}
            >
              Back to checkout
            </Button>
            <CustomMargin />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disableElevation
              startIcon={<Https />}
            >
              Continue to Payment
            </Button>
          </ButtonContainer>
        </Grid>
      </Grid>
    </Form>
  );
};

export default Shipping;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

const CustomMargin = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;
    margin: 8px 0;
  }
`;
