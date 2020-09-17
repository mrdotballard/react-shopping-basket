import React from 'react';
import logo from './logo.svg';
import './App.css';

import PricingRules from './components/PricingRules';
import ShoppingList from './components/ShoppingList';
import Basket from './components/Basket';
import { seedItems } from './helpers';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      storeMounted: false,
      items: seedItems(),
      order: {}
    };
  }

  addRuleItem = item => {
    // Copy existing state (never reach into and modify state directly)
    const items = { ...this.state.items };
    // Add new item
    items[`item${Date.now()}`] = item;
    // Set new state
    this.setState({ items });
  }

  // run onClick after setting price rules
  openStore = () => {
    console.log("on change mounting shop");
    this.setState({
      storeMounted: true
    });
  }

  // const item = {
  //   name: this.nameRef.current.value,
  //   price: parseInt(this.priceRef.current.value),
  //   rule: {
  //     ruleCount: parseInt(this.ruleCountRef.current.value),
  //     rulePrice: parseInt(this.rulePriceRef.current.value)
  //   }
  // };

  // this.props.addRuleItem(item);

  addToOrder = (key) => {
    const order = { ...this.state.order };

    // if already in the order then increment and update subtotal
    if(order[key]) {
      order[key].quantity = order[key].quantity + 1;
      order[key].subTotal = this.calcDiscount(order[key].quantity, this.state.items[key].price, this.state.items[key].rule)
    } 
    // else create object first time
    else {
      order[key] = { quantity: 1, subTotal: this.state.items[key].price};
    }

    this.setState({ order });
  }

  // rule is { ruleCount, rulePrice }
  calcDiscount = (quantity, price, rule) => {
    let remainder, discountQuantity, total;

    if (rule.ruleCount && rule.rulePrice) {
      if (quantity < rule.ruleCount) {
        return quantity * price;
      } else {
        remainder = quantity % rule.ruleCount;
        discountQuantity = Math.floor(quantity / rule.ruleCount);
        total = (remainder * price) + (discountQuantity * rule.rulePrice);

        return total;
      }
    }
  }

  clearBasket = () => {
    const order = {};
    this.setState({ order });
  }

  render() {
    let storeComp = '';
    // before mounting store, mount pricing rules component
    let pricingComp = (
      <PricingRules
        items={this.state.items}
        addRuleItem={this.addRuleItem}
        openStore={this.openStore.bind(this)}
        storeMounted={this.state.storeMounted}
      />
    );
    // if store is open mount Store and basket but unmount pricing rules 
    if (this.state.storeMounted) {
      storeComp = (
        <div className="store-wrapper">
          <ShoppingList
            items={this.state.items}
            order={this.state.order}
            addToOrder={this.addToOrder}
            storeMounted={this.state.storeMounted}
          />
          <Basket
            order={this.state.order}
            items={this.state.items}
            clearBasket={this.clearBasket}
          />
        </div>
      );

      pricingComp = '';
    }
    return (
      <div>
        <div>
          <h1>Welcome to The Shop</h1>
          {pricingComp}
        </div>
        {storeComp}
      </div>

    );
  }
}

export default App;
