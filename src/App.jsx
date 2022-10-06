import React from 'react';
import GlobalStyles from '@/styles/globalStyles';
import { Logo } from '@/components/Logo';
import { ListOfCategories } from '@/components/ListOfCategories';
import { ListOfPhotoCards } from '@/components/ListOfPhotoCards';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Logo />
			<ListOfCategories />
			<ListOfPhotoCards />
		</>
	);
};

export default App;
