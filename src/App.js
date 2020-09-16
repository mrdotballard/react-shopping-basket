import React from 'react';
import logo from './logo.svg';
import './App.css';

import PricingRules from './components/PricingRules';

class App extends React.Component {

  state = {
    items: {},
    order: {},
  };

  addItem = item => {
    // Copy existing state (never reach into and modify state directly)
    const items = { ...this.state.items };
    // Add new item
    items[`item${Date.now()}`] = item;
    // Set new state
    this.setState({
      items
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to The Shop</h1>
      <PricingRules items={this.state.items} addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
