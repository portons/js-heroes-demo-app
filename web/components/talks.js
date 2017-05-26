import React from 'react';
import styled from 'styled-components';

import Talk from 'web/components/talk';

class Talks extends React.Component {
	render() {
		const { talks, selectedTalk } = this.props;

		return (
			<Container>
				<Title>
					TODAY'S TALKS
				</Title>

				{
					talks.days[0].events.map((talk, index) => (
						<Talk key={ index }
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

export default Talks;