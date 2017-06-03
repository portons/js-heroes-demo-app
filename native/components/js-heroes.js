import React from 'react';
import { connect } from 'react-redux';
import { StatusBar, TouchableOpacity, ScrollView,
				 Text, View, StyleSheet, Image } from 'react-native';

import { fetchTalks, selectTalk } from 'core/actions/talks';

import { talksSelector, selectedTalkSelector } from 'core/selectors/talks';

import Button from 'native-components/demo/button';
import TalksList from 'native-components/demo/talks-list';

class JsHeroes extends React.Component {
	render() {
		const { talks,
						fetchTalks,
						selectTalk,
						selectedTalk } = this.props;

		return (
			<View style={ styles.container }>
				<Image source={ require('core/assets/images/logo.png') }
							 style={{ marginBottom: 10 }}/>

				{
					talks
						? <TalksList talks={ talks }
												 selectTalk={ selectTalk }
												 selectedTalk={ selectedTalk }/>
						: <Button text="FETCH TALKS"
											onPress={ fetchTalks }/>
				}
			</View>
		);
	}

	componentWillMount() {
		StatusBar.setBarStyle('light-content', true);
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