import AppDispatcher from '../AppDispatcher';
import * as ActionTypes from '../ActionTypes';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changes';

// init values
const counterValues = {
    'First': 10,
    'Second': 20,
    'Third': 30
}

// create a Store
const CounterStore = Object.assign({}, EventEmitter.prototype,{
    getCounterValues: function(){
        return counterValues;    
    },
    
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback){
        this.on(CHANGE_EVENT,callback)
    },

    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT,callback);
    }
})

// register action and get a token
CounterStore.dispatchToken = AppDispatcher.register((action)=>{
    if(action.type === ActionTypes.INCREMENT){
        counterValues[action.counterCaption] ++;
        CounterStore.emitChange();
    }else if(action.type === ActionTypes.DECREMENT){
        counterValues[action.counterCaption] --;
        CounterStore.emitChange();
    }
})

export default CounterStore;