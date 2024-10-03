import { store } from './store';

export const startNewGame = () => {
	store.dispatch({
		type: 'RESTART_GAME',
	});
};
