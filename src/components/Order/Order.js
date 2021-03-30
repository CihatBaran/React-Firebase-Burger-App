import React from 'react';
import classes from './Order.module.css';

const Order = (props) => {
  return (
    <div className={classes.Order}>
      <p>Ingredients: Salad</p>
      <p>
        Price: <strong>4.5 $</strong>
      </p>
    </div>
  );
};
export default Order;
