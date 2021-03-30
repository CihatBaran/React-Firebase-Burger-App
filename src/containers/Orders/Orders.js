import React, { Component } from 'react';
import APIService from '../../APIService/APIService';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../APIService/axios-orders';

class Orders extends Component {
  state = {
    allResults: [],
  };
  componentDidMount = () => {
    APIService.getAllOrders().then((res) => {
      const results = [];

      Object.keys(res.data).forEach((el) => {
        results.push(res.data[el]);
      });

      this.setState({
        allResults: results,
      });
    });
  };

  render() {
    console.log(this.state.allResults);
    const content = this.state.allResults
      .reverse()
      .map((order, key) => <Order order={order} key={key} />);

    return <div>{content}</div>;
  }
}

export default withErrorHandler(Orders, axios);
