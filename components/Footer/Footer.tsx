import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			display: 'flex',
			background: 'white',
			borderTop: '1px solid #dce0e9',
			marginTop: theme.spacing(4),
			justifyContent: 'center',
		},
		content: {
			width: '100%',
			display: 'flex',
			padding: theme.spacing(3),
			maxWidth: theme.breakpoints.values.lg,
		},
	}),
);

const Footer = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.content}>lol</div>
		</div>
	);
};

export default Footer;
