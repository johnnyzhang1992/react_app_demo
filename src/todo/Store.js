import {createStore, combineReducers} from 'redux';
// , applyMiddleware, compose
import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';

// import Perf from 'react-addons-perf'

// const win = window;
// win.Perf = Perf

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

// const middlewares = [];
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')());
// }

// const storeEnhancers = compose(
//   applyMiddleware(...middlewares),
//   (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
// );

// export default createStore(reducer, {}, storeEnhancers);
// 打开浏览器拓展配置 Redux-DevTools
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());