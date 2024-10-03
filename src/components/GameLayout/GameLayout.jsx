import PropTypes from 'prop-types';
import { Field } from '../Field/Field';
import { Information } from '../Information/Information';
import styles from './GameLayout.module.css';
import { startNewGame } from '../../services/services';

export const GameLayout = () => (
	<div className={styles['tic-tac-toe']}>
		<button className={styles.btnStartNewGame} onClick={startNewGame}>
			Start new game
		</button>
		<Information />
		<Field />
	</div>
);

GameLayout.propTypes = {
	fields: PropTypes.array,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	startNewGame: PropTypes.func,
};
