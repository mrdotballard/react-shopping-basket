import React from 'react';
import PropTypes from 'prop-types';
import AddItemForm from './AddItemForm';
import Item from './Item';

class PricingRules extends React.Component {
  static propTypes = {
    addItem: PropTypes.func,
    items: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      rule: PropTypes.shape({
        ruleCount: PropTypes.number,
        rulePrice: PropTypes.number
      })
    })
  };

  // Refs provide a way to access DOM nodes or React elements created in the render method.
  nameRef = React.createRef();
  priceRef = React.createRef();
  ruleCountRef = React.createRef();
  rulePriceRef = React.createRef();

  createItem = (e) => {
    e.preventDefault();

    const item = {
      name: this.nameRef.current.value,
      price: this.priceRef.current.value,
      rule: {
        ruleCount: this.ruleCountRef.current.value,
        rulePrice: this.rulePriceRef.current.value
      }
    };

    this.props.addItem(item);
    e.currentTarget.reset();
  }

  render() {

    return (
      <div className="pricing-rules">
        <h2>Pricing Rules</h2>
        <ul>
          {Object.keys(this.props.items).map(key =>
            <li>
              <span>{this.props.items[key].name}</span>
              <span>{this.props.items[key].price}</span>
              <span>{this.props.items[key].rule.ruleCount}</span>
              <span>{this.props.items[key].rule.rulePrice}</span>

            </li>

            // <Item 
            //   key={key}
            //   index={key}
            //   item={this.props.items[key]}
            // />
          )}
        </ul>
        <AddItemForm addItem={this.props.addItem} />
      </div>
    );
  }
}

export default PricingRules;