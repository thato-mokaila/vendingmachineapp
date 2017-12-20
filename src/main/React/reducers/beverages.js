import
{
	FETCH_BEVERAGES,
	EXPORT_BEVERAGE,
	UPDATE_DISPLAY,
    ACCEPT_PAYMENT
} from '../actions/types';

const initialState = {
	data: [],
	selected: {},
	message: 'Waiting for selection. Change is possible.',
	userAmount: 0
};

const beverages = (state = initialState, action) => {

	switch(action.type) {

		case 'FETCH_BEVERAGES':

			console.debug('[-------------------------');
			console.debug(' FETCH_BEVERAGES.action', action);
			console.debug('[-------------------------');

			// fetching data using mock rest service [action.payload.data ]
			// fetching data using static data [action.payload ]
			// fetching data using spring rest api [action.payload.embedded.beverages ]

			let fetchState = {
				...state,
				data: [ ...action.payload.data ],
				selected: {}
			};
			return fetchState;

		case 'EXPORT_BEVERAGE':

			console.debug('[-------------------------');
			console.debug(' EXPORT_BEVERAGE.action', action);
			console.debug('[-------------------------');

			let exportState = {
				...state,
				//data: [ ...action.payload ],
				selected: action.selectedBeverage
			};
			return exportState;

		case 'UPDATE_DISPLAY':

			console.debug('[-------------------------');
			console.debug(' UPDATE_DISPLAY.action', action);
			console.debug('[-------------------------');

			let displayState = {
				...state,
				message: action.message
			};
			return displayState;

		case 'ACCEPT_PAYMENT':

			console.debug('[-------------------------');
			console.debug(' ACCEPT_PAYMENT.action', action);
			console.debug('[-------------------------');

			let userAmountState = {
				...state,
				userAmount: state.userAmount += action.userAmount
			};
			return userAmountState;

		case 'RESET':

			console.debug('[-------------------------');
			console.debug(' RESET.action', action);
			console.debug('[-------------------------');

			let resetState = {
				...state,
				userAmount: action.userAmount,
				selected: action.selected,
				message: initialState.message
			};
			return resetState;

		case 'DEDUCT_PRODUCT':

			console.debug('[-------------------------');
			console.debug(' DEDUCT_PRODUCT.action', action);
			console.debug('[-------------------------');

			// fetching data using mock rest service [action.payload.data ]
			// fetching data using static data [action.payload ]
			// fetching data using spring rest api [action.payload.embedded.beverages ]

			let deductState = {
				...state,
				selected: action.payload.data
			};
			return deductState;

		default:
			return state;
	}

};

export default beverages;
