import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Header from '@/components/Header/Header';

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
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2),
			marginTop: theme.spacing(14),
			[theme.breakpoints.down('sm')]: {
				paddingLeft: 0,
				paddingRight: 0,
			},
		},
	}),
);

interface LayoutProps {
	hideHeader?: boolean;
	children: React.ReactNode;
}

const Layout = ({ hideHeader, children }: LayoutProps) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{!hideHeader && <Header />}
			<div className={classes.layout}>{children}</div>
		</div>
	);
};

export default Layout;
