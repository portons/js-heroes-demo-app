import React from 'react';
import { ScrollView } from 'react-native';

import Talk from 'native-components/demo/talk';

const TalksList = ({ talks }) => (
	<ScrollView vertical>
		{
			talks.map((talk, index) => (
				<Talk key={ index }
							talk={ talk }/>
			))
		}
	</ScrollView>
);

export default TalksList;