import React from 'react';
import PropTypes from 'prop-types';
import AddItemForm from './AddItemForm';
import Item from './Item';

class PricingRules extends React.Component {


  // Refs provide a way to access DOM nodes or React elements created in the render method.
  nameRef = React.createRef();
  priceRef = React.createRef();
  ruleCountRef = React.createRef();
  rulePriceRef = React.createRef();

  render() {

    return (
      <div className="pricing-rules">
        <h2>Pricing Rules</h2>
        <ul className="pricing-list">
          <li className="column-heads">
            <p>Item Name</p>
            <p>Item Price</p>
            <p>Discount</p>
          </li>
          {Object.keys(this.props.items).map(key =>
            <Item
              key={key}
              index={key}
              item={this.props.items[key]}
              storeMounted={this.props.storeMounted}
              pricingRule={true}
            />
          )}
        </ul>

        <AddItemForm addRuleItem={this.props.addRuleItem} />

        <button onClick={this.props.openStore.bind(this)}>Open The Shop</button>
      </div>
    );
  }

  static propTypes = {
    addItem: PropTypes.func,
    items: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      rule: PropTypes.shape({
        ruleCount: PropTypes.number,
        rulePrice: PropTypes.number
      })
    }),
    storeMounted: PropTypes.bool
  };
}


export default PricingRules;