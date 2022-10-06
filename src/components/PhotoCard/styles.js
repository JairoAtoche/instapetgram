import styled from 'styled-components';
import { fadeIn } from '@/styles/keyframes';

export const ImgWrapper = styled.div`
	width: 100%;
	height: 0;
	padding: 56.25% 0 0 0;
	display: block;
	border-radius: 10px;
	overflow: hidden;
	position: relative;
`;

export const Img = styled.img`
	${fadeIn()}
	width: 100%;
	height: 100%;
	object-fit: cover;
	box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
	position: absolute;
	top: 0;
`;

export const Button = styled.button`
	padding-top: 8px;
	display: flex;
	align-items: center;
	cursor: pointer;
	background-color: transparent;
	border: none;

	& svg {
		margin-right: 4px;
	}
`;
