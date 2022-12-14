import React from 'react';
import PropTypes from 'prop-types';
import { ImgWrapper, Img, Button } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';

const DEFAULT_IMAGE =
	'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
	return (
		<article>
			<a href={`/detail/${id}`}>
				<ImgWrapper>
					<Img src={src} />
				</ImgWrapper>
			</a>
			<Button>
				<MdFavoriteBorder size='32px' />
				{likes} likes!
			</Button>
		</article>
	);
};

PhotoCard.propTypes = {
	id: PropTypes.number,
	src: PropTypes.string,
	likes: PropTypes.number,
};
