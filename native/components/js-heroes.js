import React from 'react';
import { StatusBar, Text, View, StyleSheet } from 'react-native';
import Anime from 'react-native-anime';

//import Button from 'native-components/demo/button';
//import TalksList from 'native-components/demo/talks-list';

class JsHeroes extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>EMPTY</Text>
			</View>
		);
	}

	//componentWillMount() {
	//	StatusBar.setBarStyle('light-content', true);
	//}
	//
	//componentDidUpdate(prevProps) {
	//	if (this.props.talks && !prevProps.talks) {
	//		this.title
	//			.color('#228dcb', { duration: 2000 })
	//			.start();
	//	}
	//}
}

const styles = StyleSheet.create({
	container: {},
	title: {
		fontSize: 40,
		color: 'white',
		marginBottom: 20
	}
});

export default JsHeroes;