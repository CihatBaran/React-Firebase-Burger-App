import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        meat: 1,
        cheese: 1,
        bacon: 1,
      },
      totalPrice: null,
    };
  }

  //BuildIN-METHOD:
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;

    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }

    this.setState({
      ingredients: ingredients,
      totalPrice: price,
    });
  }

  //METHOD:
  cancelClickedHandler = () => {
    this.props.history.goBack();
  };

  continuedClickedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          canceled={this.cancelClickedHandler}
          continued={this.continuedClickedHandler}
          ingredients={this.state.ingredients}
        />

        <Route
          path={`${this.props.match.path}/contact-data`}
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(Checkout);
