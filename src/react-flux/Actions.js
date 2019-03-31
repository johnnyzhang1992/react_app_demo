import * as ActionTypes from './ActionTypes';
import AppDispactcher from './AppDispatcher';

export const increment = (counterCaption) =>{
    AppDispactcher.dispatch({
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    })
};

export const decrement = (counterCaption) =>{
    AppDispactcher.dispatch({
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    })
}