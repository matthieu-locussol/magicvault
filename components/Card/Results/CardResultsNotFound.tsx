import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: theme.spacing(4),
		},
	}),
);

interface CardResultsNotFoundProps {
	query: string;
}

const CardResultsNotFound = ({ query }: CardResultsNotFoundProps) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography align="center" variant="h5" gutterBottom>
				No results for "{query}"
			</Typography>
			<Typography align="center" variant="body1" color="textSecondary">
				Rephrase your question with other keywords to get a result.
			</Typography>
		</div>
	);
};

export default CardResultsNotFound;
