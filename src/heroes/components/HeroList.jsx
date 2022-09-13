import React, { useMemo } from 'react';
import { getHeroresByPublisher } from '../../heroes/helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
export const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroresByPublisher(publisher), [publisher]);

	return (
		<div className="row rows-cols-1 row-cols-md-3 g-3">
			{heroes.map((hero) => (
				<HeroCard key={hero.id} {...hero} />
			))}
		</div>
	);
};
