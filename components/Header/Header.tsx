import React from 'react';
import Link from 'next/link';
import { AppBar, AppBarProps, Button, IconButton, Toolbar, CircularProgress } from '@material-ui/core';
import { ExitToAppRounded as LogoutIcon } from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { signOut, useSession } from 'next-auth/client';
import Logo from '@/components/Header/Logo';

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
	}),
);

const Header = (props: AppBarProps) => {
	const classes = useStyles();
	const [session, loading] = useSession();

	return (
		<AppBar className={classes.root} position="relative" {...props}>
			<Toolbar className={classes.toolbar}>
				<Logo />
				{loading && <CircularProgress size={24} />}
				{!loading && !session && (
					<Link href="/auth/signin" passHref>
						<Button color="primary">Log in</Button>
					</Link>
				)}
				{!loading && session && (
					<React.Fragment>
						<Link href="/owned" passHref>
							<Button color="primary">Owned cards</Button>
						</Link>
						<IconButton
							color="primary"
							onClick={() => signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}/auth/signout` })}>
							<LogoutIcon />
						</IconButton>
					</React.Fragment>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
