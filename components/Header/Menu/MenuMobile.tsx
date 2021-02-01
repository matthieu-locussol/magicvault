import clsx from 'clsx';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	Typography,
	IconButton,
	Slide,
	Dialog,
	AppBar,
	Toolbar,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Divider,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { TransitionProps } from '@material-ui/core/transitions';
import {
	MenuRounded as MenuIcon,
	CloseRounded as CloseIcon,
	ExitToAppRounded as LogoutIcon,
} from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { signOut } from 'next-auth/client';
import { MenuLink } from '@/components/Header/Menu/Menu';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: {
			color: theme.palette.text.primary,
			background: 'white',
			boxShadow: 'none',
			borderBottom: '1px solid #dce0e9',
			position: 'relative',
			padding: theme.spacing(1),
		},
		toolbar: {
			paddingLeft: 0,
			paddingRight: theme.spacing(2.5),
		},
		title: {
			marginLeft: theme.spacing(2),
			flex: 1,
		},
		right: {
			marginLeft: 'auto',
		},
		logout: {
			color: red[400],
			position: 'absolute',
			bottom: 0,
			borderTop: '1px solid rgba(0, 0, 0, 0.12)',
		},
		active: {
			color: theme.palette.text.primary,
			fontWeight: 'bold',
		},
		list: {
			paddingTop: 0,
			height: '100%',
			position: 'relative',
		},
		item: {
			paddingTop: theme.spacing(2),
			paddingBottom: theme.spacing(2),
		},
		icon: {
			minWidth: 'auto',
			marginRight: theme.spacing(2),
		},
		iconActive: {
			color: theme.palette.primary.main,
		},
		iconLogout: {
			color: red[400],
		},
	}),
);

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & { children?: React.ReactElement },
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

interface MenuMobileProps {
	links: MenuLink[];
}

const MenuMobile = ({ links }: MenuMobileProps) => {
	const router = useRouter();
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const isActive = (href: string) => router.asPath.endsWith(href);

	return (
		<React.Fragment>
			<IconButton color="primary" className={classes.right} onClick={handleOpen}>
				<MenuIcon />
			</IconButton>
			<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
				<AppBar className={classes.appBar}>
					<Toolbar className={classes.toolbar}>
						<Typography variant="h6" className={classes.title}>
							Menu
						</Typography>
						<IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
							<CloseIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<List className={classes.list}>
					{links.map((link) => (
						<React.Fragment key={link.title}>
							<Link href={link.href} passHref>
								<ListItem button className={classes.item} onClick={handleClose}>
									<ListItemIcon
										classes={{ root: isActive(link.href) ? classes.iconActive : '' }}
										className={classes.icon}>
										{link.icon}
									</ListItemIcon>
									<ListItemText
										classes={{ primary: isActive(link.href) ? classes.active : '' }}
										primary={link.title}
										primaryTypographyProps={{
											color: isActive(link.href) ? 'textPrimary' : 'textSecondary',
										}}
									/>
								</ListItem>
							</Link>
							<Divider />
						</React.Fragment>
					))}
					<ListItem
						button
						className={clsx(classes.item, classes.logout)}
						onClick={() => signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}/auth/signout` })}>
						<ListItemIcon classes={{ root: classes.iconLogout }} className={classes.icon}>
							<LogoutIcon />
						</ListItemIcon>
						<ListItemText primary="Log out" />
					</ListItem>
				</List>
			</Dialog>
		</React.Fragment>
	);
};

export default MenuMobile;
