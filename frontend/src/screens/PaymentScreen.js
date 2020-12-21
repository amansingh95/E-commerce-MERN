import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
       
        <Col>
          <Form.Check
            type="radio"
            label="PayPal or Credit Card"
            id="PayPal"
            name="paymentMethod"
            value="PayPale"
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          />

<Form.Check
            type="radio"
            label=" PhonePay"
            id="PhonePay"
            name="paymentMethod"
            value="PhonePay"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </Col>

        <Button type="submit" variant="primary">
          {" "}
          Countinue
        </Button>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
