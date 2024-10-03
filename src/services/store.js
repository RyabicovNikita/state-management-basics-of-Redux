import { createStore } from 'redux';
import { reducer } from './reducer.js';

// const createStore = (reducer) => {
// 	let state;
// 	console.log(state);
// 	return {
// 		dispatch: (action) => {
// 			state = reducer(state, action);
// 		},
// 		getState: () => state,
// 	};
// };

export const store = createStore(reducer);
