import axios from 'axios';

import { FETCH_BEVERAGES, EXPORT_BEVERAGE, UPDATE_DISPLAY, ACCEPT_PAYMENT, RESET, DEDUCT_PRODUCT } from './types';

export const fetchBeverages = () => {

	const request = axios.get('https://demo5364857.mockable.io/api/beverages');
	//console.debug('[ Fetch beverages action ]', request);
	return {
		type: FETCH_BEVERAGES,
		payload: request
		// [
		//   {
		//     "name": "Coke",
		//     "description": "Cca-Cola product",
		//     "price": 7.50,
		//     "quantity": 20,
		//     "image": "coke-icon.png",
		//     "w": "100",
		//     "h": "120"
		//   },
		//   {
		//     "name": "Sprite",
		//     "description": "Cca-Cola product",
		//     "price": 7.50,
		//     "quantity": 10,
		//     "image": "sprite-icon.png",
		//     "w": "100",
		//     "h": "120"
		//   },
		//   {
		//     "name": "Fanta Orange",
		//     "description": "Cca-Cola product",
		//     "price": 7.50,
		//     "quantity": 10,
		//     "image": "fanta-orange-icon.png",
		//     "w": "100",
		//     "h": "100"
		//   },
		//   {
		//     "name": "Fanta Grape",
		//     "description": "Cca-Cola product",
		//     "price": 7.50,
		//     "quantity": 10,
		//     "image": "fanta-grape-icon.png",
		//     "w": "65",
		//     "h": "100"
		//   },
		//   {
		//     "name": "Appletiser",
		//     "description": "Cca-Cola product",
		//     "price": 12.50,
		//     "quantity": 20,
		//     "image": "appletiser-icon.png",
		//     "w": "65",
		//     "h": "100"
		//   },
		//   {
		//     "name": "Grapetiser",
		//     "description": "Cca-Cola product",
		//     "price": 12.50,
		//     "quantity": 10,
		//     "image": "grapetiser-icon.png",
		//     "w": "115",
		//     "h": "120"
		//   },
		//   {
		//     "name": "Pepsi",
		//     "description": "Cca-Cola product",
		//     "price": 7.00,
		//     "quantity": 10,
		//     "image": "pepsi-icon.png",
		//     "w": "110",
		//     "h": "145"
		//   },
		//   {
		//     "name": "Red Bull",
		//     "description": "Cca-Cola product",
		//     "price": 24.50,
		//     "quantity": 10,
		//     "image": "redbull-icon.png",
		//     "w": "120",
		//     "h": "140"
		//   }
		// ]
	}
}

export const exportBeverage = (selectedBeverage) => {

	const exportedBeverage = {
		type: EXPORT_BEVERAGE,
		selectedBeverage
	}
	//console.debug('[ Export beverage action ]', exportedBeverage);
	return exportedBeverage;
}

export const updateDisplay = (message) => {

	const latestMessage = {
		type: UPDATE_DISPLAY,
		message
	}
	//console.debug('[ Update display action ]', latestMessage);
	return latestMessage;
}

export const acceptPayment = (userAmount) => {

	const payment = {
		type: ACCEPT_PAYMENT,
		userAmount
	}
	//console.debug('[ Accept payment action ]', payment);
	return payment;
}

export const reset = (resetObject) => {

	const reset = {
		type: RESET,
		userAmount: resetObject.userAmount,
		message: resetObject.message,
		selected: resetObject.selected
	}
	//console.debug('[ Accept payment action ]', reset);
	return reset;
}

export const deductProduct = (selectedBeverage) => {

	const request = axios.get('https://demo5364857.mockable.io/api/beverages/deduct/' + selectedBeverage.id);
	const deductProduct = {
		type: DEDUCT_PRODUCT,
		payload: request
	}
	//console.debug('[ Accept payment action ]', deductProduc);
	return deductProduct;
}
