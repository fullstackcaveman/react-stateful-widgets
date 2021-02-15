import React, { useState } from 'react';

export const listOfAwesome = [
	{ id: '1', name: 'Ada Lovelace' },
	{ id: '2', name: 'Grace Hopper' },
	{ id: '3', name: 'Evelyn Boyd Granville' },
	{ id: '4', name: 'Mary Kenneth Keller' },
	{ id: '5', name: 'Frances Allen' },
	{ id: '6', name: 'Carol Shaw' },
];

export default function Programmers() {
	const [programmers, setProgrammers] = useState(listOfAwesome);
	const [programmerId, setProgrammerId] = useState(null);

	const getNameOfFeatured = () => {
		const filter = programmers.filter((dev) => dev.id === programmerId);
		const devName = filter[0].name;

		return devName;
	};

	const style = {
		fontSize: '1.5em',
		marginTop: '0.5em',
		color: programmerId !== null ? 'gold' : 'royalblue',
	};

	return (
		<div className='widget-programmers container'>
			<h2>Programmers</h2>
			<div className='programmers'>
				{programmers.map((dev) => (
					<div className='programmer' key={dev.id}>
						{dev.name}
						<button
							onClick={() => {
								setProgrammerId(dev.id);
							}}
						>
							Feature
						</button>
					</div>
				))}
			</div>
			<div id='featured' style={style}>
				{programmerId !== null
					? `🎉 Let's celebrate ${getNameOfFeatured()}! 🥳`
					: 'Pick an awesome programmer'}
			</div>
		</div>
	);
}
