import React, { Component } from "react";
import { Form, Col, Button, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import APIService from "../../../APIService/APIService";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Aux from "../../../hoc/Aux/Aux";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  //METHOD:
  orderHandler = (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Cihat Baran",
        address: {
          street: "23 Sheppard Avenue East",
          zipCode: "M2N/0C8",
          country: "Canada",
        },
        email: "cihatbarann@gmail.com",
      },
      deliveryMethod: "fastest",
    };

    console.log(order);

    APIService.postOrder(order)
      .then((response) => {
        if (response.status === 200) {
          this.props.history.push("/");
        }
        this.setState({ loading: false, purchasing: false });
      })
      .catch((error) => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    return (
      <Aux>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <Container style={{ marginBottom: "50px" }}>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridText">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" name="address" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  placeholder="Apartment, studio, or floor"
                  name="address2"
                />
              </Form.Group>

              <Form.Group controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control placeholder="Phone +1..." name="phone" />
              </Form.Group>

              <Button
                variant="success"
                type="submit"
                onClick={this.orderHandler}
              >
                Complete Order
              </Button>
            </Form>
          </Container>
        )}
      </Aux>
    );
  }
}
export default withRouter(ContactData);
