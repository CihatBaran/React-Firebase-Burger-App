import React from "react";
import Burger from "../../Burger/Burger";

import classes from "./CheckoutSummary.module.css";
import Button from "../../UI/Button/Button";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Hope it tastes well..</h1>
      <div
        style={{
          width: "100%",
          height: "auto",
          margin: "auto",
          overflow: "scroll",
        }}
      >
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.canceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.continued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
