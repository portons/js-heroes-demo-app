import React from 'react';
import styled from 'styled-components';

import Talk from 'web/components/talk';

class TalksList extends React.Component {
	render() {
		const { talks, selectedTalk, selectTalk } = this.props;

		return (
			<Container>
				<Logo src={ require('core/assets/images/logo.png') }/>

				{
					talks.map((talk, index) => (
						<Talk key={ index }
									selectTalk={ selectTalk }
									isSelected={ selectedTalk === talk }
									talk={ talk }/>
					))
				}
			</Container>
		);
	}
}

const Container = styled.div`
	overflow: auto;
	display: flex;
	flexDirection: column;
	align-items: center;
`;

const Logo = styled.img`
	width: 200px;
	margin: 20px 0;
`;

const Title = styled.div`
	font-size: 50px;
	font-weight: 700;
	color: white;
	width: 100%;
	text-align: center;
	padding: 20px 0;
	margin-bottom: 20px;
`;

export default TalksList;