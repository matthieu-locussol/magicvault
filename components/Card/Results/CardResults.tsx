import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Paper, LinearProgress, Typography } from '@material-ui/core';
import CardResultsTable from '@/components/Card/Results/CardResultsTable';
import CardResultsPagination from '@/components/Card/Results/CardResultsPagination';
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
			<Pagination />
			{store.search.results && store.search.results.length > 0 ? (
				<CardResultsTable cards={store.search.results} />
			) : store.search.loading ? (
				<LinearProgress />
			) : store.search.query.length > 0 ? (
				<Typography variant="body1" align="center">
					No results found for "{store.search.query}".
				</Typography>
			) : (
				<Typography variant="body1" align="center">
					You didn't enter anything to search for.
				</Typography>
			)}
			<Pagination />
		</Paper>
	);
};

export default CardResults;
