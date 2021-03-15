import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class StripeCheckoutButton extends React.Component {
  onToken = (token) => {
    console.log(token);
  };

  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey='pk_test_51IVKeKFr4YQnfWQEfBZp3tiWSIkBgoP584qCDEz3RCsqAXBdcQy119vjK7jdA0E7xb6iiSnV1XvXTpzvbhRm578y00q6Qs1VL3'
      />
    );
  }
}
