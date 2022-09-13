import React from 'react';
import { HeroList } from '../../heroes/components/HeroList';
export const DcPage = () => {
	return (
		<>
			<h1>DC Comics</h1>
			<hr />
			<HeroList publisher="DC Comics" />
		</>
	);
};
