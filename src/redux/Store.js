import {createStore} from 'redux';
import reducer from './Reducer';

const initValues = {
    'First': 10,
    'Second': 20,
    'Third': 30
};

const store = createStore(reducer, initValues);

export default store;