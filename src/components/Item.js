import React from 'react';
import PropTypes from 'prop-types';


class Item extends React.Component {

  // if no rule then display empty string
  itemRuleDisplay(rule) {
    if (rule.ruleCount > 0)
      return (
        `Buy ${rule.ruleCount} for ${rule.rulePrice}p`
      )
    else
      return '';
  }

  render() {

    const index = this.props.index;

    // only displaly buy button on shopping list componenet call
    if (this.props.shoppingList) {
      return (
        <li>
          <button
            className="buy-button"
            onClick={() => this.props.addToOrder(index)}>
            Buy
        </button>
          <p>{this.props.item.name}</p>
          <p>{`${this.props.item.price}p`}</p>
          <p>{this.itemRuleDisplay(this.props.item.rule)}</p>
        </li>
      );
    }

    return (
      <li>
        < p > {this.props.item.name}</p >
        <p>{`${this.props.item.price}p`}</p>
        <p>{this.itemRuleDisplay(this.props.item.rule)}</p>
      </li >
    );
  }

  static propTypes = {
    index: PropTypes.string,
    item: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      rule: PropTypes.shape({
        ruleCount: PropTypes.number,
        rulePrice: PropTypes.number
      })
    }),
    storeMounted: PropTypes.bool,
    addToOrder: PropTypes.func
  };
}

export default Item;