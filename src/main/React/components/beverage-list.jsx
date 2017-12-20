import React, { Component } from 'react';
import Beverage from './beverage'

import * as fetchBeverages from '../actions';
import { connect } from 'react-redux';

class BeverageList extends Component {

  constructor(...props) {
    super(...props);
    this.parentFunctionHandler = this.parentFunctionHandler.bind(this);
  }

  componentWillMount() {
    this.props.fetchBeverages();
  }

  parentFunctionHandler(item) {
    // receive selected item from child component (beverage)
    console.debug(item);
  }

  render() {
    let rows = [];
    // beverage injected from 'Content' component
    this.props.beverages.forEach(beverage => {
      // create child beverage components, and bind this parent method (parentFunctionHandler)
      // so that we can call it from the child items
      rows.push(
        <Beverage
          beverage={beverage}
          key={beverage.name}
          parentFunction={this.parentFunctionHandler}
        />
      );
    });

    return (
      <div className="container-fluid">
        <div className="row">
            {rows}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // what ever is returned from here will
  // be available to any subscriber as part
  // of the props object
  return {
    //uuid: '760c9d95-3b18-4240-9342-4634a0eab3e5',
    beverages: state.beverages.data,
  }
}

//function dispatchToProps(dispatch) {}

export default connect(mapStateToProps, fetchBeverages)(BeverageList);

// coke √
// sprite √
// pepsi √
// fanta g
// fanta 0 √
// appletiser √
// grapetiser 


