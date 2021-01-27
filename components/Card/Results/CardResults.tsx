import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Paper, LinearProgress } from '@material-ui/core';
import CardResultsTable, { CardColumn } from '@/components/Card/Results/CardResultsTable';
import CardResultsHelp from '@/components/Card/Results/CardResultsHelp';
import CardResultsNotFound from '@/components/Card/Results/CardResultsNotFound';
import CardResultsPagination from '@/components/Card/Results/CardResultsPagination';
import CardOwnedOptions from '@/components/Card/Owned/CardOwnedOptions';
import ManaCost from '@/components/Card/ManaCost';
import { Card } from '@/types/Card';
import { useStore } from '@/store';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '100%',
		},
	}),
);

const CardResults = () => {
	const classes = useStyles();
	const [store] = useStore();

	const columns: CardColumn[] = [
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
			getter: (card: Card) => card.set.toUpperCase(),
		},
		{
			name: 'N°',
			getter: (card: Card) => card.collector_number,
		},
		{
			name: 'NAME',
			getter: (card: Card) => card.name,
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
			name: 'LA',
			getter: (card: Card) => card.lang.toUpperCase(),
		},
		{
			name: 'USD',
			getter: (card: Card) => (card.prices.usd ? `$${card.prices.usd}` : ''),
		},
		{
			name: 'EUR',
			getter: (card: Card) => (card.prices.eur ? `$${card.prices.eur}` : ''),
		},
		{
			name: 'TIX',
			getter: (card: Card) => card.prices.tix,
		},
	];

	const Pagination = () => (
		<CardResultsPagination
			page={store.search.page}
			count={store.search.resultsCount}
			query={store.search.query}
			loading={store.search.loading}
		/>
	);

	return (
		<Paper className={classes.root}>
			{store.search.results && store.search.results.length > 0 ? (
				<React.Fragment>
					<Pagination />
					<CardResultsTable
						cards={store.search.results}
						columns={columns}
						caption={`Results for "${store.search.query}"`}
					/>
					<Pagination />
				</React.Fragment>
			) : store.search.loading ? (
				<LinearProgress />
			) : store.search.query.length > 0 ? (
				<CardResultsNotFound query={store.search.query} />
			) : (
				<CardResultsHelp />
			)}
		</Paper>
	);
};

export default CardResults;
