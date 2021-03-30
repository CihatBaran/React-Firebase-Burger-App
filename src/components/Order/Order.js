import React from 'react';
import classes from './Order.module.css';
import { Card, Alert } from 'react-bootstrap';

import Aux from '../../hoc/Aux/Aux';
const Order = (props) => {
  return (
    <div className={classes.Order}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.order.customer.name}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {props.order.customer.email}
          </Card.Subtitle>
          <Card.Text>
            Address:{' '}
            {`${props.order.customer.address.street} ${props.order.customer.address.zipCode}, ${props.order.customer.address.country} `}
          </Card.Text>
          <Card.Text>Delivery Type: {props.order.deliveryMethod}</Card.Text>

          <hr />
          <Card.Text>
            <strong>Ingredients:</strong>
          </Card.Text>

          <Card.Text>
            {Object.keys(props.order.ingredients).map((key, _) => {
              return (
                <Aux key={_}>
                  <strong>{key}:</strong>
                  {props.order.ingredients[key]}
                  <br />
                </Aux>
              );
            })}
          </Card.Text>
        </Card.Body>
        Total Price:
        <Alert variant='success'>
          {parseFloat(props.order.price).toPrecision(3)} CAD excluding HST
        </Alert>
      </Card>
    </div>
  );
};
export default Order;
