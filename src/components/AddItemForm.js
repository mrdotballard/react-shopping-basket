import React from 'react';
import PropTypes from 'prop-types';


class AddItemForm extends React.Component {

  // Refs provide a way to access DOM nodes or React elements created in the render method.

  nameRef = React.createRef();
  priceRef = React.createRef();
  ruleCountRef = React.createRef();
  rulePriceRef = React.createRef();

  createRuleItem = (e) => {
    e.preventDefault();

    const item = {
      name: this.nameRef.current.value,
      price: parseInt(this.priceRef.current.value),
      rule: {
        ruleCount: parseInt(this.ruleCountRef.current.value),
        rulePrice: parseInt(this.rulePriceRef.current.value)
      }
    };

    this.props.addRuleItem(item);
    e.currentTarget.reset();
  }

  render() {

    return (
      <div className="pricing-rules">
        <form onSubmit={this.createRuleItem}> 
          <div className="pricing-form">
            <label htmlFor="name">Item Name</label>
            <input name="name" ref={this.nameRef} type="text" required />
          </div>
          <div className="pricing-form">
            <label htmlFor="price">Item Price</label>
            <input name="price" ref={this.priceRef} type="number" required />
          </div>
          <div className="pricing-form">
            <label htmlFor="rule">Item Rule</label>
            <input name="rule-count" ref={this.ruleCountRef} placeholder="Item count" type="number" />
            <input name="rule-price" ref={this.rulePriceRef} placeholder="Discount price" type="number" />
          </div>
          <button type="submit">+ Add Item</button>
        </form>
      </div>
    );
  }
}

export default AddItemForm;