import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Header from '@/components/Header/Header';
import SearchBar from '@/components/Header/SearchBar';
import Footer from '@/components/Footer/Footer';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
		},
		layout: {
			display: 'flex',
			justifyContent: 'space-between',
			width: '100%',
			maxWidth: theme.breakpoints.values.lg,
			paddingLeft: theme.spacing(3),
			paddingRight: theme.spacing(3),
			marginTop: theme.spacing(4),
			[theme.breakpoints.down('sm')]: {
				paddingLeft: 0,
				paddingRight: 0,
				flexDirection: 'column',
			},
		},
		title: {
			width: '100%',
			maxWidth: theme.breakpoints.values.lg,
			paddingLeft: theme.spacing(3),
			paddingRight: theme.spacing(3),
			marginTop: theme.spacing(4),
		},
	}),
);

interface LayoutProps {
	hideHeader?: boolean;
	hideSearch?: boolean;
	hideFooter?: boolean;
	children: React.ReactNode;
	title?: React.ReactNode;
}

const Layout = ({ hideHeader, hideSearch, hideFooter, children, title }: LayoutProps) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{!hideHeader && <Header />}
			{!hideSearch && <SearchBar />}
			{title && <div className={classes.title}>{title}</div>}
			<div className={classes.layout}>{children}</div>
			{!hideFooter && <Footer />}
		</div>
	);
};

export default Layout;
