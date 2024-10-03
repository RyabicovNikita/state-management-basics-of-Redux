import { useEffect, useState } from 'react';
import { store } from '../../services/store';
import styles from './FieldLayout.module.css';

export function FieldLayout({ handleClick }) {
	const { fields } = store.getState();
	const [stateFields, setStateFields] = useState(fields);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			const { fields } = store.getState();
			setStateFields(fields);
		});
		return () => unsubscribe();
	}, []);

	return (
		<div className={styles['fields-container']}>
			{stateFields?.length &&
				stateFields.map((item, index) => (
					<button
						key={index}
						className={`${styles['fields-container__field']} col-4`}
						onClick={() => handleClick(index)}
					>
						{item}
					</button>
				))}
		</div>
	);
}
