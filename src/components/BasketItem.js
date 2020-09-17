import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class BasketItem extends React.Component {

  
  render() {
    
    return (
      <li>
        <p>{this.props.order.quantity}</p>
        <p>{this.props.item.name}</p>
        <p>{formatPrice(this.props.order.subTotal)}</p>
      </li>
    );
  }

  static propTypes = {
    tallyTotal: PropTypes.func,
    order: PropTypes.object,
    index: PropTypes.string,
    item: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      rule: PropTypes.shape({
        ruleCount: PropTypes.number,
        rulePrice: PropTypes.number
      })
    }),
  };
}

export default BasketItem;