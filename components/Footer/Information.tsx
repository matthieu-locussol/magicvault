import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			background: '#f4f6f9',
			border: '1px solid #dce0e9',
			padding: theme.spacing(4),
			borderRadius: theme.spacing(0.5),
		},
	}),
);

interface InformationProps {
	children: React.ReactNode;
}

const Information = ({ children }: InformationProps) => {
	const classes = useStyles();

	return <div className={classes.root}>{children}</div>;
};

export default Information;
