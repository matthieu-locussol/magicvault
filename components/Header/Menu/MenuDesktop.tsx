import React from 'react';
import Link from 'next/link';
import { Button, IconButton, CircularProgress } from '@material-ui/core';
import { ExitToAppRounded as LogoutIcon } from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { signOut, useSession } from 'next-auth/client';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			display: 'flex',
		},
		logout: {
			marginLeft: 'auto',
		},
		button: {
			marginLeft: theme.spacing(2),
		},
	}),
);

const MenuDesktop = () => {
	const classes = useStyles();
	const [session, loading] = useSession();

	return (
		<div className={classes.root}>
			{loading && <CircularProgress size={24} />}
			{!loading && !session && (
				<Link href="/auth/signin" passHref>
					<Button color="primary">Log in</Button>
				</Link>
			)}
			{!loading && session && (
				<React.Fragment>
					<Link href="/owned" passHref>
						<Button color="primary" className={classes.button}>
							My collection
						</Button>
					</Link>
					{/* <Link href="/needed" passHref> */}
					<Button color="primary" className={classes.button}>
						Needed cards
					</Button>
					{/* </Link> */}
					<IconButton
						color="primary"
						className={classes.logout}
						onClick={() => signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}/auth/signout` })}>
						<LogoutIcon />
					</IconButton>
				</React.Fragment>
			)}
		</div>
	);
};

export default MenuDesktop;
