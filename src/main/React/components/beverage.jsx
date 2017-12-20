import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as exportBeverage from '../actions';

class Beverage extends Component {

  constructor(...props) {
    super(...props);
    this.state = {
      selectedBeverage: this.props.beverage
    }
    this.publishSelfOnStore = this.publishSelfOnStore.bind(this);
  }

  publishSelfOnStore(e) {
    e.preventDefault();
    // onclick event of this component should publish this component
    // on the global redux state store (and not reference functions
    // from the parent component)
    this.props.exportBeverage(this.state.selectedBeverage);

    const message = 'Selection made: ' + this.state.selectedBeverage.name + ', Please insert notes/coins to proceed...';
    this.props.updateDisplay(message);
  }

  render() {
    return (
        <div className="col-6 col-sm-3">
          <br/>
          <div className="card">
              <div className="row">
                <div className="col">
                  <img className="img-fluid" src={"../img/custom/" + this.props.beverage.image} width={this.props.beverage.w} height={this.props.beverage.h} alt="Card cap"/>
                </div>
                <div className="col mt-4">
                  Quantity: {this.props.beverage.quantity}
                </div>
              </div>
              <div className="card-body">
                  <h4 className="card-title">{this.props.beverage.name}</h4>
                  <p>{parseFloat(this.props.beverage.price).toFixed(2)}</p>
                  <a href="" className="btn info-color" onClick={this.publishSelfOnStore}>Select</a>
              </div>
          </div>
        </div>
    );
  }
}

export default connect(null, exportBeverage)(Beverage);
