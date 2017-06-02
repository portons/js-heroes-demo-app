import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchTalks, selectTalk } from 'core/actions/talks';

import { talksSelector, selectedTalkSelector } from 'core/selectors/talks';

import Welcome from 'web/components/welcome';
import Talks from 'web/components/talks';

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
						? <Talks talks={ talks }
										 selectTalk={ selectTalk }
										 selectedTalk={ selectedTalk }/>
						: <Welcome fetchTalks={ fetchTalks } />
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

const mapStateToProps = (state) => ({
	talks: talksSelector(state),
	selectedTalk: selectedTalkSelector(state)
});

export default connect(mapStateToProps, { fetchTalks, selectTalk })(JsHeroes);