import { useState } from 'react';
import { AppBar, AppBarProps, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AccountMenu from '@/components/Header/Menus/AccountMenu';
import AccountButton from '@/components/Header/Menus/AccountButton';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			alignItems: 'center',
			background: 'white',
			boxShadow: 'none',
			borderBottom: '1px solid #dce0e9',
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1),
		},
		toolbar: {
			width: '100%',
			display: 'flex',
			maxWidth: theme.breakpoints.values.lg,
		},
		title: {
			fontFamily: 'Yusei Magic',
			marginRight: 'auto',
		},
	}),
);

const Header = (props: AppBarProps) => {
	const classes = useStyles();
	const [accountAnchor, setAccountAnchor] = useState<null | HTMLElement>(null);

	return (
		<AppBar className={classes.root} {...props}>
			<Toolbar className={classes.toolbar}>
				<Typography color="textPrimary" variant="h5" className={classes.title}>
					MagicVault
				</Typography>
				<AccountButton onClick={(e) => setAccountAnchor(e.currentTarget)} />
			</Toolbar>
			<AccountMenu anchor={accountAnchor} onClose={() => setAccountAnchor(null)} />
		</AppBar>
	);
};

export default Header;
