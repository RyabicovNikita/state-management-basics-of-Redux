import { WIN_PATTERNS } from '../../constants';
import { ACTIONS } from '../../services/actions';
import { store } from '../../services/store';
import { FieldLayout } from '../FieldLayout/FieldLayout';

export function Field() {
	const checkWinner = (newFields) => {
		let winnerMsg;
		if (WIN_PATTERNS.some((item) => item.every((i) => newFields[i] === 'X'))) {
			winnerMsg = 'Player X won!';
		} else if (WIN_PATTERNS.some((item) => item.every((i) => newFields[i] === '0'))) {
			winnerMsg = 'Player Y won!';
		} else if (newFields.every((item) => item !== '')) {
			winnerMsg = 'Game over. Draw!';
		}
		return winnerMsg;
	};
	function handleClick(index) {
		const { currentPlayer, fields, isGameEnded } = store.getState();
		const newFields = JSON.parse(JSON.stringify(fields));
		if (newFields[index] === '' && !isGameEnded) {
			newFields[index] = currentPlayer;
			store.dispatch({
				type: ACTIONS.UPDATE_FIELDS,
				payload: { fields: newFields },
			});
			store.dispatch({
				type: ACTIONS.CHANGE_CURRENT_PLAYER,
				payload: currentPlayer === 'X' ? '0' : 'X',
			});
			const winner = checkWinner(newFields);
			if (winner) store.dispatch({ type: ACTIONS.SHOW_WINNER, payload: winner });
		}
	}
	return <FieldLayout handleClick={handleClick} />;
}
