import React from 'react';
import Anime from 'react-native-anime';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

import { heartBeatButton, disappearingButtonTitle } from 'native-utils/animations';

class Button extends React.Component {
	onPress = () => {
		const button = heartBeatButton(this.button);
		const text = disappearingButtonTitle(this.text);

		new Anime.Parallel([button, text]).start(() => this.props.onPress && this.props.onPress());
	};

	render = () => (
		<TouchableWithoutFeedback onPress={ this.onPress }>
			<Anime.View style={ styles.container }
									ref={ ref => this.button = ref }>
				<Anime.Text style={ styles.text }
										ref={ ref => this.text = ref }>
					{ this.props.text }
				</Anime.Text>
			</Anime.View>
		</TouchableWithoutFeedback>
	);
}

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