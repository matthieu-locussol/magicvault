import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, IconButton } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { ExitToAppRounded as LogoutIcon } from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { signOut } from 'next-auth/client';
import { MenuLink } from '@/components/Header/Menu/Menu';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		logout: {
			color: red[400],
			marginLeft: 'auto',
		},
		button: {
			marginLeft: theme.spacing(2),
		},
		label: {
			color: theme.palette.text.secondary,
			'&:hover': {
				color: theme.palette.text.primary,
			},
		},
		active: {
			color: theme.palette.text.primary,
			fontWeight: 'bold',
		},
	}),
);

interface MenuDesktopProps {
	links: MenuLink[];
}

const MenuDesktop = ({ links }: MenuDesktopProps) => {
	const router = useRouter();
	const classes = useStyles();

	const isActive = (href: string) => router.asPath.startsWith(href);

	return (
		<React.Fragment>
			{links.map((link) => (
				<Link href={link.href} key={link.title} passHref>
					<Button
						color="primary"
						classes={{
							label: isActive(link.href) ? clsx(classes.label, classes.active) : classes.label,
						}}
						className={classes.button}
						startIcon={link.icon}>
						{link.title}
					</Button>
				</Link>
			))}
			<IconButton
				color="primary"
				className={classes.logout}
				onClick={() => signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}/auth/signout` })}>
				<LogoutIcon />
			</IconButton>
		</React.Fragment>
	);
};

export default MenuDesktop;
