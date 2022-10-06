import React from 'react';
import { Category } from '@/components/Category';
import { List, Item } from './styles';
import db from '@/api/db.json';

export const ListOfCategories = () => {
	return (
		<List>
			{db.categories.map(({ id, cover, path, emoji }) => (
				<Item key={id}>
					<Category cover={cover} path={path} emoji={emoji} />
				</Item>
			))}
		</List>
	);
};
