import React from "react";
import StripeCheckout from "react-stripe-checkout";

function PaymentButton({ price }) {
  const priceForStripe = price * 100;
  const PublishableKey =
    "pk_test_51Iuu7DSBKEWWbULuYxoseXprsvNtKa73mQa7eXfACYFEHdWm4EMoFazNt0VX2UYQChLWr99O2sRHRSXeKNfrLgE900EE1lIP1q";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <>
      <StripeCheckout
        label="Proceed to Pay"
        name="MyMart Online Store"
        billingAddress
        shippingAddress
        image="https://i.ibb.co/7t2Nwcc/Group-5.png"
        description={`Your total is ${price}$`}
        amount={priceForStripe}
        panelLabel="Proceed to Pay"
        token={onToken}
        stripeKey={PublishableKey}
      />
    </>
  );
}

export default PaymentButton;
