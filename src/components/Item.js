import React from 'react';
import PropTypes from 'prop-types';


class Item extends React.Component {
  static propTypes = {
    index: PropTypes.string,
    item: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      rule: PropTypes.shape({
        ruleCount: PropTypes.number,
        rulePrice: PropTypes.number
      })
    })
  };

  render() {
    const item = this.props.item;

    return (
      <li>
        <span>{item.name}</span>
        <span>{item.price}</span>

      </li>
    )
  }
}

export default Item;