import React from 'react';
import { ScrollView } from 'react-native';

import Talk from 'native-components/demo/talk';

const TalksList = ({ talks, selectTalk, selectedTalk }) => (
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

export default TalksList;