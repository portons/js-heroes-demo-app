import React from 'react';
import { StatusBar, TouchableOpacity, ScrollView,
				 Text, View, StyleSheet, Image } from 'react-native';

//import TalksList from 'native-components/demo/talks-list';
//import Button from 'native-components/demo/button';

class JsHeroes extends React.Component {
	render() {
		const { talks,
						fetchTalks,
						selectTalk,
						selectedTalk } = this.props;

		return (
			<View style={ styles.container }>
				<Text style={{ fontSize: 30 }}>
					EMPTY :(
				</Text>
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
		paddingTop: 30
	},
	title: {
		fontSize: 40,
		color: 'white',
		marginBottom: 20
	}
});

export default JsHeroes;