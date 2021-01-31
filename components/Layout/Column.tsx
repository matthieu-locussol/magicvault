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
			maxWidth: '388px',
			marginRight: theme.spacing(4),
			'& > *:not(:first-child)': {
				marginTop: theme.spacing(4),
			},
			[theme.breakpoints.down('sm')]: {
				maxWidth: '100%',
				marginRight: 0,
			},
		},
		right: {
			width: '100%',
			maxWidth: '812px',
			[theme.breakpoints.down('sm')]: {
				maxWidth: '100%',
				marginTop: theme.spacing(4),
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

	return <div className={columnClass}>{children}</div>;
};

export default Column;
