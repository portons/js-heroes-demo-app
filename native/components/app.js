import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';

import { talksSelector } from 'core/selectors/talks';

import { fetchTalks } from 'core/actions/talks';

import Button from 'native-components/demo/button';
import TalksList from 'native-components/demo/talks-list';

class App extends React.Component {
	render() {
		return (
			<View style={ styles.container }>
				<Text style={ styles.title }>JS HEROES</Text>

				{
					this.props.talks
						? <TalksList talks={ this.props.talks.days[0].events }/>
						: <Button text="FETCH TALKS"
											onPress={ this.props.fetchTalks }/>
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#222'
	},
	title: {
		fontSize: 30,
		color: 'white',
		marginBottom: 20
	}
});

const mapStateToProps = (state) => ({
	talks: talksSelector(state)
});

export default connect(mapStateToProps, { fetchTalks })(App);
