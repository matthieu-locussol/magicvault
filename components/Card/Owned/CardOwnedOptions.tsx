import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { IconButton, Typography, CircularProgress } from '@material-ui/core';
import { Add as PlusIcon, Remove as MinusIcon } from '@material-ui/icons';
import { Card } from '@/types/Card';
import { green, red } from '@material-ui/core/colors';
import { useUpdateOwned } from '@/hooks/useUpdateOwned';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			minWidth: 80,
			display: 'flex',
			justifyContent: 'space-between',
			'& > *:not(:first-child)': {
				marginLeft: theme.spacing(1),
			},
		},
		add: {
			color: green[400],
		},
		remove: {
			color: red[400],
		},
	}),
);

interface CardOwnedOptionsProps {
	card: Card;
	amount: number;
	loading: boolean;
	disabled: boolean;
}

const CardOwnedOptions = ({ card, amount, loading, disabled }: CardOwnedOptionsProps) => {
	const classes = useStyles();
	const updateOwned = useUpdateOwned();

	return (
		<div className={classes.root}>
			<IconButton
				disabled={amount === 0 || disabled}
				aria-label="Decrease"
				size="small"
				className={classes.remove}
				onClick={() => updateOwned(card, amount - 1)}>
				<MinusIcon fontSize="inherit" />
			</IconButton>
			<Typography variant="button" style={{ fontFamily: 'sans-serif' }}>
				{loading ? <CircularProgress size={7.8} /> : amount}
			</Typography>
			<IconButton
				disabled={disabled}
				aria-label="Increase"
				size="small"
				className={classes.add}
				onClick={() => updateOwned(card, amount + 1)}>
				<PlusIcon fontSize="inherit" />
			</IconButton>
		</div>
	);
};

export default CardOwnedOptions;
