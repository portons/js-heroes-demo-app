import React from 'react';
import { Provider } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';

class App extends React.Component {
	render() {
		return (
			<View style={ styles.container }>
				<Text style={ styles.title }>HELLO JS HEROES</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 30
	}
});

export default App;
