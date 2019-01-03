import * as types from '../constants/actionTypes';

export function startLoading(){
    return dispatch => dispatch({
        type: types.START_LOADING,
        isLoading: true
    }); 
}
export function fetchSales(response){
    return dispatch => dispatch({
        type: types.FETCH_SALES,
        data: response.data ? response.data.data : [],
        error: response.error || null,
        isLoading: false
    });
}