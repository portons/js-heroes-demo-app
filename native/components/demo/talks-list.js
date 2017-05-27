import React from 'react';
import { ScrollView } from 'react-native';

import Talk from 'native-components/demo/talk';

class TalksList extends React.Component {
	render() {
		const { talks, selectTalk, selectedTalk } = this.props;

		return (
			<ScrollView vertical>
				{
					talks.map((talk, index) => (
						<Talk key={ index }
									isSelected={ talk === selectedTalk }
									selectTalk={ selectTalk }
									talk={ talk }/>
					))
				}
			</ScrollView>
		);
	}
}

export default TalksList;