import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>Τα υλικά που επιλέξατε είναι: </p>
      <ul>{ingredientsSummary}</ul>
      <p>Το συνολικό κόστος είναι <strong>{props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to Checkout ? </p>
      <span style={{textAlign: 'center'}}>
        <Button clicked={props.purchaseCanceled} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={props.purchaseContinue} btnType="Success">
          CONTINUE
        </Button>
      </span>
    </Auxiliary>
  );
};

export default orderSummary;
