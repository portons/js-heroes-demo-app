import React from 'react';
import { StatusBar, Text, View, StyleSheet } from 'react-native';
import Anime from 'react-native-anime';

//import Button from 'native-components/demo/button';
//import TalksList from 'native-components/demo/talks-list';

class JsHeroes extends React.Component {
	render() {
		return (
			<View style={ styles.container }
						ref={ ref => this.title = ref }>
				<Text style={{ fontSize: 30 }}>EMPTY</Text>
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