import React from 'react';
import { Category } from '@/components/Category';
import { List, Item } from './styles';

export const ListOfCategories = () => {
	return (
		<List>
			{[1, 2, 3].map(category => (
				<Item key={category}>
					<Category />
				</Item>
			))}
		</List>
	);
};