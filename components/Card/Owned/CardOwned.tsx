import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Paper, LinearProgress, Typography } from '@material-ui/core';
import CardResultsTable from '@/components/Card/Results/CardResultsTable';
import CardOwnedPagination from '@/components/Card/Owned/CardOwnedPagination';
import { useStore } from '@/store';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '100%',
		},
	}),
);

const CardOwned = () => {
	const classes = useStyles();
	const [store] = useStore();

	const Pagination = () => (
		<CardOwnedPagination
			page={store.profile.ownedPage}
			count={store.profile.ownedCards.length}
			loading={store.profile.loading}
		/>
	);

	const ownedCardsSlice = store.profile.ownedCards.slice(
		store.profile.ownedPage * 75,
		(store.profile.ownedPage + 1) * 75,
	);

	return (
		<Paper className={classes.root}>
			<Pagination />
			{store.profile.ownedCards && store.profile.ownedCards.length > 0 ? (
				<CardResultsTable cards={ownedCardsSlice} />
			) : store.profile.loading ? (
				<LinearProgress />
			) : (
				<Typography variant="body1" align="center">
					You don't have any owned cards yet.
				</Typography>
			)}
			<Pagination />
		</Paper>
	);
};

export default CardOwned;
