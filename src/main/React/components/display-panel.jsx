import React, {Component} from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert2'
import * as actions from '../actions';
import { Alert, AlertContainer } from "react-bs-notifier";

var spacer = { marginTop: "5px", marginBottom: "5px" };

var style1 = { height: "300px" }; // style="background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(41).jpg');"
var style2 = { height: "300px" }; // style="background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(14).jpg');"

class DisplayPanel extends Component {

    constructor(...props) {
        super(...props);
        this.state = {
          selectedBeverage: {},
    			isShowingInfoAlert: false,
    			isShowingSuccessAlert: false,
    			isShowingWarningAlert: false,
    			isShowingDangerAlert: false,
          enableButtons: false,
          timeout: 3,
          notes: 0,
          coins: 0,
          stateFlag: false
    		};
        this.handlePayment = this.handlePayment.bind(this);
    }

    componentWillReceiveProps(nextProps) {

      console.debug('this.state -> ', this.state);
      console.debug('nextProps -> ', nextProps);

      console.debug(nextProps.selectedBeverage != null);
      console.debug(nextProps.selectedBeverage !== null);
      console.debug(nextProps.selectedBeverage.length == 0);
      console.debug(nextProps.selectedBeverage.length === 0);
      console.debug('Object.keys(nextProps.selectedBeverage).length == 0', Object.keys(nextProps.selectedBeverage).length == 0);
      console.debug('!Object.keys(nextProps.selectedBeverage).length == 0', !Object.keys(nextProps.selectedBeverage).length == 0);


      if (!Object.keys(nextProps.selectedBeverage).length == 0) {
        this.setState({
          enableButtons: true
        });
      }
    }

    onAlertToggle(type) {
  		this.setState({
  			[type]: !this.state[type]
  		});
  	}

    addStateAmount(received_amount) {
        received_amount += this.props.userAmount;
        return received_amount;
    }

    handlePayment(event) {

        event.preventDefault();
        var amount = this.extractAmount(event.target.innerHTML);

        var required_amount = parseFloat(this.props.selectedBeverage.price);
        var received_amount = parseFloat(amount);

        console.debug('[ == required: ', required_amount);
        console.debug('[ == received: ', received_amount);

        var totalIncludingState = this.addStateAmount(received_amount);

        console.debug('this.props.selectedBeverage.quantity', this.props.selectedBeverage.quantity);

        if (totalIncludingState > required_amount) {

            this.props.acceptPayment(totalIncludingState);
            let change = totalIncludingState - required_amount;

            console.debug('[ ** received: ', totalIncludingState);
            console.debug('[ ** change: ', change);

            this.props.reset({
                userAmount: 0,
                message: '',
                selected: {}
            });

            swal({
                title: 'Transaction Complete!',
                text: "Your change is being dispatched.",
                type: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'New transaction!'
            }).then((result) => {
                if (result.value) {
                    swal(
                        'Cleared!',
                        'Change: R ' + change,
                        'success'
                    )
                }
            });

            // invoke api to deduct a product item from the total quantity
            //this.props.deductProduct(this.props.selectedBeverage);

            // let returnedObj = ...; // returned from update api

            // obj result = find the object being modified in the array (unmodified array from initial state)
            // create a new array and replace the target object in the array with the updated one
            // update the global state with the new array (that contains a modified target object)
            
            // let updateList = this.props.beverages.map(
            //   // perform this function on each element
            //   function(){
            //     // match and update array element
            //   });

            this.setState({
              enableButtons: false
            });

        } else {
            this.props.acceptPayment(received_amount);
            // alert message
            const msg = 'Insufficient payment for selection ['+this.props.selectedBeverage.name+'], Please add more notes or coins.'
            this.props.updateDisplay(msg);
            //this.onAlertToggle("isShowingInfoAlert");
        }
    }
    extractAmount(string) {
        return string.replace(/^\D+/g, '');
    }

  render() {

    //var _disabled = this.state.disableButtons ? 'disabled' : ''

    return (
    	<div>
    	<div style={spacer}> &nbsp; </div>
			<div className="card card-body">

      <div className="col-md-12">
      <AlertContainer position="top-left" timeout={this.state.timeout}>
      					{this.state.isShowingInfoAlert ? (
      						<Alert type="info" headline="Oh Some Info">
      							Something happened of only moderate importance.
      						</Alert>
      					) : null}

      					{this.state.isShowingSuccessAlert ? (
      						<Alert type="success" headline="Oh My Something Nice">
      							Something amazing has happened!
      						</Alert>
      					) : null}

      					{this.state.isShowingWarningAlert ? (
      						<Alert type="warning" headline="Oh Uhh Hmm">
      							Something bad may be about to happen.
      						</Alert>
      					) : null}

      					{this.state.isShowingDangerAlert ? (
      						<Alert type="danger" headline="Oh Shit">
      							Something bad has happened. Panic!
      						</Alert>
      					) : null}
      				</AlertContainer>
        </div>
				<div className="col-md-12">

				    <ul className="nav md-pills pills-default d-flex justify-content-center">
				        <li className="nav-item">
				            <a className="nav-link" data-toggle="tab" href="#panel11" role="tab"><h4>{this.props.message}</h4></a>
				        </li>
				    </ul>

				    <div className="tab-content mb-1">

				        <div className="tab-pane fade  show active" id="panel11" role="tabpanel">

				            <div className="row">

				                <div className="col-md-12">

				                    <section className="section mb-1">

				                        <div className="row">

				                            <div className="col-md-6 mb-r">
				                                <div className="card card-image unique-color" style={style1}>

				                                    <div className="text-white text-left d-flex align-items-left py-5 px-4">
				                                        <div className="align-items-left">
				                                            <h4 className="mb-4 mt-4 font-bold">Balance: R <span>{this.props.userAmount}</span></h4>
				                                            <button className="btn btn-md info-color" disabled={!this.state.enableButtons} onClick={this.handlePayment}>R 50</button>
				                                            <button className="btn btn-md info-color" disabled={!this.state.enableButtons} onClick={this.handlePayment}>R 20</button>
				                                            <button className="btn btn-md info-color" disabled={!this.state.enableButtons} onClick={this.handlePayment}>R 10</button>
				                                            <br/>
				                                            <button className="btn btn-md info-color" disabled={!this.state.enableButtons} onClick={this.handlePayment}>R 5</button>
				                                            <button className="btn btn-md info-color" disabled={!this.state.enableButtons} onClick={this.handlePayment}>R 2</button>
				                                            <button className="btn btn-md info-color" disabled={!this.state.enableButtons} onClick={this.handlePayment}>R 1</button>
				                                            <button className="btn btn-md info-color" disabled={!this.state.enableButtons} onClick={this.handlePayment}>R .50</button>
				                                        </div>
				                                    </div>
				                                </div>
				                            </div>

				                            <div className="col-md-6 mb-r">
				                                <div className="card card-image unique-color" style={style2}>

				                                    <div className="text-white text-center d-flex py-5 px-4">
				                                        <div>
				                                            <h4 className="mb-4 mt-4 font-bold">Nothing Selected</h4>
				                                            <p>Please select a product below to continue.</p>
				                                        </div>
				                                    </div>
				                                </div>
				                            </div>

				                        </div>

				                    </section>

				                </div>

				            </div>

				        </div>

				    </div>

				</div>
			</div>
		</div>
    );
  }
}

function mapStateToProps(state) {
	console.debug('displayPanel.getState:', state);
	return {
		  selectedBeverage: state.beverages.selected,
    	message: state.beverages.message,
    	userAmount: state.beverages.userAmount,
      stateFlag: true
  	}
}

function dispatchToProps(dispatch) {}

export default connect(mapStateToProps, actions)(DisplayPanel);
