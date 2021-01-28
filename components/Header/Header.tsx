import React from 'react';
import { AppBar, AppBarProps, Toolbar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Logo from '@/components/Header/Logo';
import MenuDesktop from '@/components/Header/Menu/MenuDesktop';

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
		logout: {
			marginLeft: 'auto',
		},
		button: {
			marginLeft: theme.spacing(2),
		},
	}),
);

const Header = (props: AppBarProps) => {
	const classes = useStyles();

	return (
		<AppBar className={classes.root} position="relative" {...props}>
			<Toolbar className={classes.toolbar}>
				<Logo />
				<MenuDesktop />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
