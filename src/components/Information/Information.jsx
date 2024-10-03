import { useEffect, useState } from 'react';
import { store } from '../../services/store';
import styles from './Information.module.css';

export function Information() {
	return <InformationLayout />;
}

function InformationLayout() {
	const { currentPlayer, isGameEnded } = store.getState();
	const [stateInfo, setStateInfo] = useState({ currentPlayer, isGameEnded });
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			const { currentPlayer, isGameEnded } = store.getState();
			setStateInfo({ currentPlayer, isGameEnded });
		});
		return () => unsubscribe();
	}, []);

	const playerInfo = <span className={styles['info__player']}>{stateInfo?.currentPlayer}</span>;
	return (
		<>
			{!stateInfo?.isGameEnded && <p className={styles['info']}>Player: {playerInfo}</p>}
			{stateInfo?.isGameEnded && playerInfo}
		</>
	);
}
