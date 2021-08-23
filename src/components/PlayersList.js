import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import Player from './Player';
import { playersData } from '../utils/data';
const PlayersList = () => {
	const [players] = useState(playersData);

	return (
		<Container>
			<Grid container spacing={3}>
				{players.map((player) => {
					const { id, fullName, img, playRole } = player;
					return <Player player={player} />;
				})}
			</Grid>
		</Container>
	);
};

export default PlayersList;
