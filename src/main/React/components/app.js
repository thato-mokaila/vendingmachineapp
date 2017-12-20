/**
 * Getting started:
 *
 * $ npm install jquery --save
 * $ npm install redux --save
 * $ npm install react-redux --save
 * $ npm install redux-devtools --save-dev
 * $ npm install react-bs-notifier --save
 */

import React, { Component } from 'react';

import Navbar from './navbar'
import DisplayPanel from './display-panel'
import BeverageList from './beverage-list'

class App extends Component {

  constructor(...props) {
    super(...props);
    // instance property
    this.state = { beverages: [] };
  }

  componentDidMount() {
    console.log("Content loaded.");
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar/>
        <DisplayPanel/>
        <BeverageList beverages={this.state.beverages}/>
      </div>
    );
  }
}

export default App;
