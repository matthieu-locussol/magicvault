import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Header from '@/components/Header/Header';
import SearchBar from '@/components/Header/SearchBar';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		},
		layout: {
			display: 'flex',
			justifyContent: 'space-between',
			width: '100%',
			maxWidth: theme.breakpoints.values.lg,
			paddingLeft: theme.spacing(3),
			paddingRight: theme.spacing(3),
			marginTop: theme.spacing(26),
			[theme.breakpoints.down('sm')]: {
				paddingLeft: 0,
				paddingRight: 0,
				marginTop: theme.spacing(24),
				flexDirection: 'column',
			},
		},
	}),
);

interface LayoutProps {
	hideHeader?: boolean;
	hideSearch?: boolean;
	children: React.ReactNode;
}

const Layout = ({ hideHeader, hideSearch, children }: LayoutProps) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{!hideHeader && <Header />}
			{!hideSearch && <SearchBar />}
			<div className={classes.layout}>{children}</div>
		</div>
	);
};

export default Layout;
