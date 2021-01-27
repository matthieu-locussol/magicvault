import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SearchRounded as SearchIcon } from '@material-ui/icons';
import SearchArrowIcon from '@/components/Icons/SearchArrowIcon';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flex: '1 1',
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(4),
			marginBottom: theme.spacing(12),
		},
		left: {
			display: 'flex',
			paddingLeft: theme.spacing(2),
		},
		right: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: theme.spacing(20),
			marginLeft: theme.spacing(4),
		},
		icon: {
			fontSize: 72,
			marginBottom: theme.spacing(2),
		},
	}),
);

const CardResultsHelp = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.left}>
				<SearchArrowIcon />
			</div>
			<div className={classes.right}>
				<SearchIcon className={classes.icon} />
				<Typography variant="h5" gutterBottom>
					Start by typing some keywords
				</Typography>
				<Typography variant="body1" color="textSecondary">
					Type at least one character that should be contained in a card name!
				</Typography>
			</div>
		</div>
	);
};

export default CardResultsHelp;
