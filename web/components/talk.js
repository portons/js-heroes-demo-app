import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { selectTalk } from 'core/actions/talks';

class Talk extends React.Component {
	render() {
		const { talk, selectTalk } = this.props;

		return (
			<Container onClick={ () => selectTalk(talk) }>
				<Time>
					{ talk.time }
				</Time>

				<Avatar>
					<StyledImage src={ talk.avatar } className="avatar"/>
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
			</Container>
		);
	}
}

const Container = styled.div`
 display: flex; 
 width: 100%; 
 borderTop: 3px solid #393939; 
 padding: 30px 0;
 transition: all 0.5s ease-out;
  	
 &:hover {
 	padding: 40px 0;
 	transition: all 0.5s ease-out;
 	
 	.avatar {
 		height: 170px;
		width: 130px;
		transition: all 0.5s ease-out;
 	}
 }
`;

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
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledImage = styled.img`
	height: 150px;
	width: 110px;
	transition: all 0.5s ease-out;
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

export default connect(null, { selectTalk })(Talk);