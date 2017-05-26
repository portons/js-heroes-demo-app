import React from 'react';
import styled from 'styled-components';

const Talk = ({ talk }) => (
	<div style={{ display: 'flex', width: '100%', borderTop: '3px solid #393939', padding: '30px 0' }}>
		<Time>
			{ talk.time }
		</Time>

		<Avatar>
			<StyledImage src={ talk.avatar } />
		</Avatar>

		<Info>
			{
				talk.name &&
				<Name>{ talk.name }</Name>
			}

			{
				talk.title &&
				<Title>{ talk.title }</Title>
			}
		</Info>
	</div>
);

const Time = styled.div`
	color: #fff;
  font-weight: 300;
  font-size: 44px;
  line-height: 60px;
  width: 200px;
	display: flex;
	align-items: center;
`;

const Avatar = styled.div`
	with: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledImage = styled.img`
	height: 150px;
	width: 110px;
`;

const Info = styled.div`
	flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
`;

const Name = styled.div`
	color: #228dcb;
  fill: #228dcb;
  font-size: 30px;
`;

const Title = styled.div`
	color: #8e8e8e;
  font-size: 16px;
  font-weight: 300;
  margin: 0 auto;
  font-size: 25px;
`;

export default Talk;