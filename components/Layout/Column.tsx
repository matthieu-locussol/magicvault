import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {},
		full: {
			width: '100%',
		},
		left: {
			width: '100%',
			maxWidth: '396px',
			[theme.breakpoints.down('sm')]: {
				maxWidth: '100%',
			},
		},
		right: {
			width: '100%',
			maxWidth: '820px',
			[theme.breakpoints.down('sm')]: {
				maxWidth: '100%',
			},
		},
	}),
);

interface ColumnProps {
	type: 'full' | 'left' | 'right';
	children: React.ReactNode;
}

const Column = ({ type, children }: ColumnProps) => {
	const classes = useStyles();

	const columnClass = {
		full: classes.full,
		left: classes.left,
		right: classes.right,
	}[type];

	return (
		// <div className={classes.root}>
		<div className={columnClass}>{children}</div>
		// </div>
	);
};

export default Column;
