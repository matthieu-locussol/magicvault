import { Card as MuiCard, CardProps } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			padding: theme.spacing(4),
			boxShadow: `0 5px 10px 0 rgba(31, 51, 86, 0.06)`,
			borderRadius: theme.spacing(1.5),
			[theme.breakpoints.down('sm')]: {
				padding: theme.spacing(2),
				borderRadius: 0,
			},
		},
	}),
);

const Card = (props: CardProps) => {
	const classes = useStyles();

	return <MuiCard className={classes.root} {...props} />;
};

export default Card;
