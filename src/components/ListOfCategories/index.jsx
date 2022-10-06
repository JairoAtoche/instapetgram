import React, { useState, useEffect } from 'react';
import { Category } from '@/components/Category';
import { List, Item } from './styles';

export const ListOfCategories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('https://petgram-server-beryl.vercel.app/categories')
			.then(res => res.json())
			.then(response => {
				setCategories(response);
			});
	}, []);

	return (
		<List>
			{categories.map(({ id, cover, path, emoji }) => (
				<Item key={id}>
					<Category cover={cover} path={path} emoji={emoji} />
				</Item>
			))}
		</List>
	);
};
