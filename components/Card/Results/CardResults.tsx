import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	LinearProgress,
} from '@material-ui/core';
import ManaCost from '@/components/Card/ManaCost';
import { useSearchCards } from '@/hooks/useSearchCards';
import { useStore } from '@/store';
import { Card } from '@/types/Card';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '100%',
		},
		row: {
			'&:nth-of-type(odd)': {
				backgroundColor: '#ffffff',
			},
			'&:nth-of-type(even)': {
				backgroundColor: '#f4f8fc',
			},
		},
	}),
);

const CardResults = () => {
	const classes = useStyles();
	const [store] = useStore();
	const searchCards = useSearchCards();

	const handleChangePage = (_: unknown, newPage: number) => {
		searchCards(store.search.query, newPage);
	};

	const columns = {
		SET: (card: Card) => card.set.toUpperCase(),
		'N°': (card: Card) => card.collector_number,
		NAME: (card: Card) => card.name,
		COST: (card: Card) => <ManaCost value={card.mana_cost} />,
		TYPE: (card: Card) => card.type_line,
		R: (card: Card) => card.rarity.charAt(0).toUpperCase(),
		LA: (card: Card) => card.lang.toUpperCase(),
		ARTIST: (card: Card) => card.artist,
		USD: (card: Card) => `$${card.prices.usd}`,
		EUR: (card: Card) => `€${card.prices.eur}`,
		TIX: (card: Card) => card.prices.tix,
	};

	return (
		<Paper className={classes.root}>
			<TablePagination
				rowsPerPageOptions={[175]}
				component="div"
				count={store.search.resultsCount}
				rowsPerPage={175}
				page={store.search.page}
				onChangePage={handleChangePage}
				labelDisplayedRows={({ from, to, count }) =>
					store.search.loading ? '' : `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`
				}
			/>
			{store.search.results && store.search.results.length > 0 ? (
				<TableContainer>
					<Table stickyHeader size="small" aria-label="sticky table">
						<TableHead>
							<TableRow>
								{Object.keys(columns).map((column) => (
									<TableCell key={column}>
										<b>{column}</b>
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{store.search.results.map((card: any, idx: number) => (
								<TableRow hover className={classes.row} key={idx}>
									{Object.values(columns).map((getter, idc) => (
										<TableCell key={`${idx}-${idc}`}>{getter(card)}</TableCell>
									))}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			) : store.search.loading ? (
				<LinearProgress />
			) : (
				'Start searching please.'
			)}
			<TablePagination
				rowsPerPageOptions={[175]}
				component="div"
				count={store.search.resultsCount}
				rowsPerPage={175}
				page={store.search.page}
				onChangePage={handleChangePage}
				labelDisplayedRows={({ from, to, count }) =>
					store.search.loading ? '' : `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`
				}
			/>
		</Paper>
	);
};

export default CardResults;
