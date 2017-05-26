import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchTalks } from 'core/actions/talks';

import { talksSelector } from 'core/selectors/talks';

import Welcome from 'web/components/welcome';

class JsHeroes extends React.Component {
	render() {
		return (
			<Container>
				{
					this.props.talks
						? <div>Talks</div>
						: <Welcome fetchTalks={ this.props.fetchTalks }/>
				}
			</Container>
		)
	}
}

const Container = styled.div`
	font-family: Roboto, sans-serif;
	display: flex;
	height: 100vh;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const mapStateToProps = (state) => ({
	talks: talksSelector(state)
});

export default connect(mapStateToProps, { fetchTalks })(JsHeroes);