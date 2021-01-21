import { AppBar, AppBarProps, Button, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			alignItems: 'center',
			background: 'white',
			boxShadow: 'none',
			borderBottom: '1px solid #dce0e9',
			padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
		},
		toolbar: {
			width: '100%',
			display: 'flex',
			maxWidth: theme.breakpoints.values.lg,
		},
		title: {
			fontFamily: 'Metamorphous',
			marginRight: 'auto',
		},
	}),
);

const Header = (props: AppBarProps) => {
	const classes = useStyles();

	return (
		<AppBar className={classes.root} {...props}>
			<Toolbar className={classes.toolbar}>
				<Typography color="textPrimary" variant="h5" className={classes.title}>
					<b>M</b>agic<b>V</b>ault
				</Typography>
				<Button variant="contained" color="primary">
					Login
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
