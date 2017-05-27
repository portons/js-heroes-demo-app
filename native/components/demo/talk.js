import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Talk = ({ talk }) => (
	<TouchableOpacity>
		<View style={ styles.container }>
			<Image source={{ uri: talk.avatar }}
						 style={ styles.avatar }/>

			<View style={ styles.info }>
				<Text style={ styles.time }>{ talk.time }</Text>

				{ talk.name && <Text style={ styles.name }>{ talk.name }</Text> }

				<Text style={ styles.title }>{ talk.title }</Text>
			</View>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 20,
		paddingBottom: 20,
		borderTopColor: 'white',
		borderTopWidth: 1,
		borderBottomColor: 'white',
		borderBottomWidth: 1,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	avatar: {
		height: 120,
		width: 90
	},
	info: {
		paddingLeft: 20,
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flex: 1
	},
	time: {
		fontSize: 25,
		color: 'white'
	},
	name: {
		fontSize: 20,
		color: '#228dcb'
	},
	title: {
		color: 'white'
	}
});

export default Talk;