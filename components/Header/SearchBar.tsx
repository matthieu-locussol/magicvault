import { AppBar, AppBarProps, Toolbar, TextField, InputAdornment, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Search as SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			height: theme.spacing(12),
			justifyContent: 'center',
			alignItems: 'center',
			background: 'white',
			boxShadow: 'none',
			borderTop: '1px solid #dce0e9',
			borderBottom: '1px solid #dce0e9',
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1),
			marginTop: theme.spacing(10),
			[theme.breakpoints.down('sm')]: {
				marginTop: theme.spacing(9),
			},
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

	return (
		<AppBar className={classes.root} {...props}>
			<Toolbar className={classes.toolbar}>
				<TextField
					variant="outlined"
					className={classes.searchbar}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Button variant="contained" color="primary" className={classes.button}>
									<SearchIcon />
								</Button>
							</InputAdornment>
						),
					}}
				/>
			</Toolbar>
		</AppBar>
	);
};

export default SearchBar;
