import initialState from './initialState';
import { START_LOADING, FETCH_SALES } from '../constants/actionTypes';

export default function lenovoSalesReducer(state = initialState.lenovoSales, action) {
	switch (action.type) {
		case START_LOADING: {
			return {...state, isLoading: action.isLoading};
		}

		case FETCH_SALES: {
			return {...state, data: action.data, error: action.error, isLoading: action.isLoading};
		}

		default:
			return state;
	}
}

