import React from 'react';
import { connect } from 'react-redux';
import { StatusBar, View, StyleSheet } from 'react-native';
import Anime from 'react-native-anime';

import { talksSelector, selectedTalkSelector } from 'core/selectors/talks';

import { fetchTalks, selectTalk } from 'core/actions/talks';

import Button from 'native-components/demo/button';
import TalksList from 'native-components/demo/talks-list';

class App extends React.Component {
	componentWillMount() {
		StatusBar.setBarStyle('light-content', true);
	}

	componentDidUpdate(prevProps) {
		if (this.props.talks && !prevProps.talks) {
			this.title
				.color('#228dcb', { duration: 2000 })
				.start();
		}
	}

	render() {
		return (
			<View style={ styles.container }>
				<Anime.Text style={ styles.title }
										ref={ ref => this.title = ref }>JS HEROES</Anime.Text>

				{
					this.props.talks
						? <TalksList talks={ this.props.talks }
												 selectedTalk={ this.props.selectedTalk }
												 selectTalk={ this.props.selectTalk }/>
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
		fontSize: 40,
		color: 'white',
		marginBottom: 20
	}
});

const mapStateToProps = (state) => ({
	talks: talksSelector(state),
	selectedTalk: selectedTalkSelector(state)
});

export default connect(mapStateToProps, { fetchTalks, selectTalk })(App);
