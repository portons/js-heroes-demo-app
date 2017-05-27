import React from 'react';
import Anime from 'react-native-anime';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

class Button extends React.Component {
	onPress = () => {
		const button = this.button
			.backgroundColor('#222', { duration: 0 })
			.borderColor('#228dcb')
			.translateY(50, { spring: true })
			.wait(1000)
			.backgroundColor('#228dcb')
			.width(100)
			.height(100)
			.rotate(360)
			.borderRadius(50, { spring: true })
			.wait(2000)
			.scale(20)
			.wait(1000)
			.backgroundColor('#222');

		const text = this.text
			.color('#228dcb')
			.wait()
			.opacity(0)
			.wait()
			.width(0)
			.height(0);

		new Anime.Parallel([button, text]).start(() => this.props.onPress());
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