import React from 'react';
import styled from 'styled-components';

const Welcome = ({ fetchTalks }) => (
	<div>
		<Title>
			HELLO JS HEROES!
		</Title>

		<Button onClick={ fetchTalks }>
			FETCH TALKS
		</Button>
	</div>
);

const Title = styled.div`
	font-size: 50px;
	font-weight: 700;
	color: white;
`;

const Button = styled.div`
	margin-top: 50px;
	border: 1px solid #eee;
	border-radius: 6px;
	width: 200px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	font-size: 23px;
	transition: all 0.5s ease-in;
	color: white;
	
	&:hover {
		font-size: 25px;
		border-width: 5px;
		width: 200px;
		height: 100px;
		transition: all 0.2s linear;
	}
`;

export default Welcome;