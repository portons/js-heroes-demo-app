import React from 'react';
import styled, { css } from 'styled-components';

class Talk extends React.Component {
	render() {
		const { talk, selectTalk, isSelected } = this.props;

		return (
			<Container onClick={ () => selectTalk(talk) }
								 isSelected={ isSelected }>
				<Time className="time">
					{ talk.time }
				</Time>

				<Avatar>
					<StyledImage src={ talk.avatar } className="avatar"/>
				</Avatar>

				<Info>
					{
						talk.name &&
						<Name className="name">{ talk.name }</Name>
					}

					{
						talk.title &&
						<Title className="title">{ talk.title }</Title>
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
  	
 ${({ isSelected }) => isSelected && css`
 	padding: 40px 20px;
 	transition: all 0.5s ease-out;
 	background-color: white;
 	
		.avatar {
			height: 170px;
			width: 130px;
			transition: all 0.5s ease-out;
		}
		
		.time {
			color: #8e8e8e;
			transition: all 0.5s ease-out;
		}
		
		.name {
			font-size: 35px;
			transition: all 0.5s ease-out;
		}
		
		.title {
			font-size: 30px;
			transition: all 0.5s ease-out;
		}
 `}
`;

const Time = styled.div`
	color: #fff;
  font-weight: 300;
  font-size: 44px;
  line-height: 60px;
  width: 200px;
	display: flex;
	align-items: center;
	width: 20%;
	padding-left: 10px;
`;

const Avatar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20%;
`;

const StyledImage = styled.img`
	height: 150px;
	width: 110px;
	transition: all 0.5s ease-out;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  width: 60%;
`;

const Name = styled.div`
	color: #228dcb;
  fill: #228dcb;
  font-size: 30px;
  text-align: center;
`;

const Title = styled.div`
	color: #8e8e8e;
  font-size: 16px;
  font-weight: 300;
  margin: 0 auto;
  font-size: 25px;
  text-align: center;
`;

export default Talk;