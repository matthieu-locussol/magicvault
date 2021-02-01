import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Paper, LinearProgress } from '@material-ui/core';
import CardResultsTable, { CardColumn } from '@/components/Card/Results/CardResultsTable';
import CardOwnedPagination from '@/components/Card/Owned/CardOwnedPagination';
import CardOwnedNone from '@/components/Card/Owned/CardOwnedNone';
import CardImageIcon from '@/components/Card/CardImageIcon';
import ManaCost from '@/components/Card/ManaCost';
import IconSet from '@/components/Icons/IconSet';
import { Card } from '@/types/Card';
import { CardIdentifier } from '@/utils/api';

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

interface CardUserCollectionProps {
	collectionId: string;
	cards: Card[];
	amount: CardIdentifier[];
	loading: boolean;
}

const CardUserCollection = ({ collectionId, cards, amount, loading }: CardUserCollectionProps) => {
	const classes = useStyles();
	const [page, setPage] = useState(0);

	const columns: CardColumn[] = [
		{
			name: 'IMAGE',
			align: 'center',
			getter: (card: Card) => <CardImageIcon card={card} />,
		},
		{
			name: 'AMOUNT',
			align: 'center',
			getter: (card: Card) => amount.find((id) => id.id === card.id)?.amount,
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

	const onChangePage = (_: unknown, newPage: number) => setPage(newPage);

	const Pagination = () => (
		<CardOwnedPagination page={page} count={cards.length} loading={loading} onChangePage={onChangePage} />
	);

	return (
		<Paper className={classes.root}>
			{cards && cards.length > 0 ? (
				<React.Fragment>
					<Pagination />
					<CardResultsTable
						cards={cards.slice(page * 75, (page + 1) * 75)}
						columns={columns}
						caption={`Collection n°${collectionId}`}
					/>
					<Pagination />
				</React.Fragment>
			) : loading ? (
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

export default CardUserCollection;
