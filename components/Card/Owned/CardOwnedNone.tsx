import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: theme.spacing(4),
		},
	}),
);

const CardOwnedNone = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography align="center" variant="h5" gutterBottom>
				No cards in this collection
			</Typography>
			<Typography align="center" variant="body1" color="textSecondary">
				Search for your cards and add them to your collection!
			</Typography>
		</div>
	);
};

export default CardOwnedNone;
