import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

class ShoppingList extends React.Component {

  render() {

    return (
      <div className="pricing-rules shopping-list-wrapper">
        <h2>Add your items to the basket</h2>
        <ul className="pricing-list">
          <li className="column-heads">
            <p>Item Name</p>
            <p>Item Price</p>
            <p>Discount</p>
          </li>
        
          {Object.keys(this.props.items).map(key =>
            <Item
              key={key} // key reserved and cannot be props name
              index={key}
              item={this.props.items[key]}
              storeMounted={this.props.storeMounted}
              addToOrder={this.props.addToOrder}
              shoppingList={true}
            />
          )}
        </ul>
      </div>
    );
  }

  static propTypes = {
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

export default ShoppingList;