import React from 'react';
import PropTypes from 'prop-types';

import BasketItem from './BasketItem';
import { formatPrice } from '../helpers';

class Basket extends React.Component {

  render() {

    console.log(this.props.order);
    return (
      <div className="pricing-rules basket-wrapper">
        <h2>Your Basket</h2>
        <ul className="pricing-list">
          <li className="column-heads">
            <p>Quantity</p>
            <p>Item Name</p>
            <p>Sub-total</p>
          </li>

          {Object.keys(this.props.order).map(key =>
            <BasketItem
              key={key}
              index={key}
              order={this.props.order[key]}
              item={this.props.items[key]}
            />
          )}
        </ul>
        {/* reduce all items in order array and total subtotals */}
        <p className="basket-total">
          {`Total: ${formatPrice(Object.keys(this.props.order).reduce((prevTotal, key) => {
            return prevTotal + this.props.order[key].subTotal;
          }, 0))}`}
        </p>
        <div className="basket-buttons">
          <button>Checkout</button>
          <button onClick={() => this.props.clearBasket()}>Clear basket</button>
        </div>
      </div>
    );
  }

  static propTypes = {
    clearBasket: PropTypes.func,
    items: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      rule: PropTypes.shape({
        ruleCount: PropTypes.number,
        rulePrice: PropTypes.number
      })
    }),
    order: PropTypes.object,
    addToOrder: PropTypes.func,
    storeMounted: PropTypes.bool
  }
}

export default Basket;