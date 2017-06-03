import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchTalks, selectTalk } from 'core/actions/talks';

import { talksSelector, selectedTalkSelector } from 'core/selectors/talks';

import TalksList from 'web/components/talks-list';

class JsHeroes extends React.Component {
	render() {
		const { talks,
						selectedTalk,
						selectTalk,
						fetchTalks } = this.props;

		return (
			<Container>
				{
					talks
						? <TalksList talks={ talks }
										 		 selectTalk={ selectTalk }
										 		 selectedTalk={ selectedTalk }/>
						: <Wrapper>
								<img src={ require('core/assets/images/logo.png') }/>

								<Button onClick={ fetchTalks }>
									FETCH TALKS
								</Button>
							</Wrapper>
				}
			</Container>
		);
	}
}

const Container = styled.div`
	font-family: Roboto, sans-serif;
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Wrapper = styled.div`
	position: absolute;
	top: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.div`
	margin-top: 50px;
	border: 1px solid #eee;
	border-radius: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	font-size: 23px;
	transition: all 0.5s ease-in;
	color: white;
	padding: 30px 50px;
	
	&:hover {
		border-width: 5px;
		padding: 40px 60px;	
		background-color: white;
		color: #222;
		transition: all 0.2s linear;
	}
`;

const mapStateToProps = (state) => ({
	talks: talksSelector(state),
	selectedTalk: selectedTalkSelector(state)
});

export default connect(mapStateToProps, { fetchTalks, selectTalk })(JsHeroes);