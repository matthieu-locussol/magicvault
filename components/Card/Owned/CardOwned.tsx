import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Paper, LinearProgress } from '@material-ui/core';
import CardResultsTable, { CardColumn } from '@/components/Card/Results/CardResultsTable';
import CardOwnedPagination from '@/components/Card/Owned/CardOwnedPagination';
import CardOwnedOptions from '@/components/Card/Owned/CardOwnedOptions';
import CardOwnedNone from '@/components/Card/Owned/CardOwnedNone';
import CardImageIcon from '@/components/Card/CardImageIcon';
import ManaCost from '@/components/Card/ManaCost';
import IconSet from '@/components/Icons/IconSet';
import { Card } from '@/types/Card';
import { useStore } from '@/store';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
		},
		actions: {
			'& > *:not(:first-child)': {
				marginLeft: theme.spacing(1),
			},
		},
	}),
);

const CardOwned = () => {
	const classes = useStyles();
	const [store] = useStore();

	const columns: CardColumn[] = [
		{
			name: 'IMAGE',
			align: 'center',
			getter: (card: Card) => <CardImageIcon card={card} />,
		},
		{
			name: 'OWNED',
			align: 'center',
			authenticated: true,
			getter: (card: Card) => (
				<CardOwnedOptions
					card={card}
					amount={store.profile.ownedIdentifiers.find((e) => e.id === card.id)?.amount || 0}
					loading={store.owned.updatingId === card.id}
					disabled={store.owned.loading}
				/>
			),
		},
		{
			name: 'SET',
			align: 'center',
			getter: (card: Card) => <IconSet code={card.set} />,
		},
		{
			name: 'NAME',
			getter: (card: Card) => (card.printed_name ? card.printed_name : card.name),
			tooltip: true,
		},
		{
			name: 'COST',
			getter: (card: Card) => <ManaCost value={card.mana_cost} />,
		},
		{
			name: 'TYPE',
			getter: (card: Card) => card.type_line.split(' — ')[0].replace('Legendary', 'Lgd.'),
		},
		{
			name: 'R',
			getter: (card: Card) => card.rarity.charAt(0).toUpperCase(),
		},
		{
			name: 'USD',
			getter: (card: Card) => (card.prices.usd ? `$${card.prices.usd}` : ''),
		},
	];

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
			{store.profile.ownedCards && store.profile.ownedCards.length > 0 ? (
				<React.Fragment>
					<Pagination />
					<CardResultsTable cards={ownedCardsSlice} columns={columns} caption="My cards collection" />
					<Pagination />
				</React.Fragment>
			) : store.profile.loading ? (
				<React.Fragment>
					<Pagination />
					<LinearProgress />
					<Pagination />
				</React.Fragment>
			) : (
				<CardOwnedNone />
			)}
		</Paper>
	);
};

export default CardOwned;
