import { CLEAN_PATTERNS } from '../constants';

export const initialState = { currentPlayer: 'X', fields: CLEAN_PATTERNS, isGameEnded: false };

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'RESTART_GAME':
			return initialState;
		case 'UPDATE_FIELDS':
			return {
				...state,
				...payload,
			};
		case 'CHANGE_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: payload,
			};
		case 'SHOW_WINNER':
			return {
				...state,
				currentPlayer: payload,
				isGameEnded: true,
			};

		default:
			return state;
	}
};
