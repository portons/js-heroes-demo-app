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
						: <div style={{ position: 'absolute', top: '40vh' }}>
								<Title>
									HELLO JS HEROES!
								</Title>

								<Button onClick={ fetchTalks }>
									FETCH TALKS
								</Button>
							</div>
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

const mapStateToProps = (state) => ({
	talks: talksSelector(state),
	selectedTalk: selectedTalkSelector(state)
});

export default connect(mapStateToProps, { fetchTalks, selectTalk })(JsHeroes);