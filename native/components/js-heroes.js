import React from 'react';
import { connect } from 'react-redux';
import { StatusBar, View, StyleSheet } from 'react-native';
import Anime from 'react-native-anime';

import { fetchTalks, selectTalk } from 'core/actions/talks';

import { talksSelector, selectedTalkSelector } from 'core/selectors/talks';

import Button from 'native-components/demo/button';
import TalksList from 'native-components/demo/talks-list';

class JsHeroes extends React.Component {
	render() {
		return (
			<View style={ styles.container }>
				<Anime.Text style={ styles.title }
										ref={ ref => this.title = ref }>HELLO JS HEROES!</Anime.Text>

				{
					this.props.talks
						? <TalksList talks={ this.props.talks }
												 selectTalk={ this.props.selectTalk }
												 selectedTalk={ this.props.selectedTalk }/>
						: <Button text="FETCH TALKS"
											onPress={ this.props.fetchTalks }/>
				}
			</View>
		);
	}

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
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		paddingTop: 30,
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

export default connect(mapStateToProps, { fetchTalks, selectTalk })(JsHeroes);