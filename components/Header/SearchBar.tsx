import { FormEvent, useState } from 'react';
import { AppBar, AppBarProps, Toolbar, TextField, InputAdornment, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Search as SearchIcon } from '@material-ui/icons';
import { useSearchCards } from '@/hooks/useSearchCards';
import { useStore } from '@/store';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			height: theme.spacing(12),
			justifyContent: 'center',
			alignItems: 'center',
			background: 'white',
			boxShadow: 'none',
			borderBottom: '1px solid #dce0e9',
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1),
		},
		form: {
			width: '100%',
		},
		toolbar: {
			width: '100%',
			display: 'flex',
			maxWidth: theme.breakpoints.values.lg,
		},
		searchbar: {
			width: '100%',
		},
		button: {
			padding: `${theme.spacing(0.75)}px ${theme.spacing(1.25)}px`,
			minWidth: 0,
		},
	}),
);

const SearchBar = (props: AppBarProps) => {
	const classes = useStyles();
	const [store] = useStore();
	const [query, setQuery] = useState('');
	const searchCards = useSearchCards();

	const search = (e?: FormEvent<HTMLFormElement>) => {
		e?.preventDefault();
		searchCards(query);
	};

	return (
		<AppBar className={classes.root} position="relative" {...props}>
			<Toolbar className={classes.toolbar}>
				<form onSubmit={search} className={classes.form}>
					<TextField
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						variant="outlined"
						className={classes.searchbar}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<Button
										disabled={store.search.loading}
										variant="contained"
										color="primary"
										className={classes.button}
										onClick={() => search()}>
										<SearchIcon />
									</Button>
								</InputAdornment>
							),
						}}
					/>
				</form>
			</Toolbar>
		</AppBar>
	);
};

export default SearchBar;
