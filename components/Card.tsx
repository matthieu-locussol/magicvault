import React from 'react';
import { Card as MuiCard, CardProps as MuiCardProps } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Omit } from '@material-ui/types';

interface StyleProps {
	noPadding?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			padding: (props: StyleProps) => (props.noPadding ? 0 : theme.spacing(4)),
			boxShadow: `0 5px 10px 0 rgba(31, 51, 86, 0.06)`,
			borderRadius: theme.spacing(1.5),
			[theme.breakpoints.down('sm')]: {
				padding: theme.spacing(2),
				borderRadius: 0,
			},
		},
	}),
);

interface CardProps extends MuiCardProps {
	noPadding?: boolean;
}

const Card = (props: CardProps & Omit<CardProps, keyof StyleProps>) => {
	const { noPadding, ...other } = props;
	const classes = useStyles({ noPadding });

	return <MuiCard className={classes.root} {...other} />;
};

export default Card;
