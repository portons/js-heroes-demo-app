import React from 'react';
import Anime from 'react-native-anime';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

class Talk extends React.Component {
	componentDidUpdate(prevProps) {
		if (this.props.isSelected && !prevProps.isSelected) {
			const avatar = this.avatar.height(160).width(120);
			const time = this.time.color('#222');
			const title = this.title.color('#222');
			const container = this.container.height(200).backgroundColor('white');

			const animations = [avatar, container, time, title];

			if (this.name) {
				animations.push(this.name.fontSize(30));
			}

			new Anime.Parallel(animations).start();
		}

		if (!this.props.isSelected && prevProps.isSelected) {
			const avatar = this.avatar.height(122).width(90);
			const time = this.time.color('white');
			const title = this.title.color('white');
			const container = this.container.height(162);

			const animations = [avatar, container, time, title];

			if (this.name) {
				animations.push(this.name.fontSize(20));
			}

			new Anime.Parallel(animations).start();
		}
	};

	render() {
		const { talk } = this.props;

		return (
			<TouchableWithoutFeedback onPress={ () => this.props.selectTalk(talk) }>
				<Anime.View style={ styles.container }
										ref={ ref => this.container = ref }>
					<Anime.Image source={{ uri: talk.avatar }}
											 ref={ ref => this.avatar = ref }
								 			 style={ styles.avatar }/>

					<View style={ styles.info }>
						<Anime.Text style={ styles.time }
												ref={ ref => this.time = ref }>{ talk.time }</Anime.Text>

						{
							talk.name &&
							<Anime.Text style={ styles.name }
													ref={ ref => this.name = ref }>
								{ talk.name }
							</Anime.Text>
						}

						<Anime.Text style={ styles.title }
												ref={ ref => this.title = ref }>
							{ talk.title }
						</Anime.Text>
					</View>
				</Anime.View>
			</TouchableWithoutFeedback>
		);
	}
}

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