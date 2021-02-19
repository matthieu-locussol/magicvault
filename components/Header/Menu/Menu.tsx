import React from 'react';
import Link from 'next/link';
import { Button, CircularProgress, useMediaQuery } from '@material-ui/core';
import {
	FolderRounded as CollectionIcon,
	// SyncAltRounded as TradeIcon
} from '@material-ui/icons';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { useSession } from 'next-auth/client';
import MenuMobile from '@/components/Header/Menu/MenuMobile';
import MenuDesktop from '@/components/Header/Menu/MenuDesktop';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '100%',
			display: 'flex',
		},
		right: {
			marginLeft: 'auto',
		},
	}),
);

export interface MenuLink {
	href: string;
	title: string;
	icon: JSX.Element;
}

const Menu = () => {
	const theme = useTheme();
	const classes = useStyles();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
	const [session, loading] = useSession();

	const links: MenuLink[] = [
		{
			href: '/collection',
			title: 'My collection',
			icon: <CollectionIcon />,
		},
		// {
		// 	href: '/needed',
		// 	title: 'Needed cards',
		// 	icon: <TradeIcon />,
		// },
	];

	return (
		<div className={classes.root}>
			{loading && <CircularProgress className={classes.right} size={24} />}
			{!loading && !session && (
				<Link href="/auth/signin" passHref>
					<Button color="primary" className={classes.right}>
						Log in
					</Button>
				</Link>
			)}
			{!loading && session && isMobile && <MenuMobile links={links} />}
			{!loading && session && !isMobile && <MenuDesktop links={links} />}
		</div>
	);
};

export default Menu;
