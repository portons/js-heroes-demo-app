import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text }) => (
	<TouchableOpacity onPress={ onPress }>
		<View style={ styles.container }>
			<Text style={ styles.text }>
				{ text }
			</Text>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		padding: 20,
		borderWidth: 2,
		borderRadius: 6,
		borderColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 30,
		color: 'white'
	}
});

export default Button;