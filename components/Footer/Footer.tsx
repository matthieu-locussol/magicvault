import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Information from '@/components/Footer/Information';
import Link from '@/components/Link';

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
			<div className={classes.content}>
				<Information>
					<Typography variant="h6" gutterBottom>
						Product
					</Typography>
					<Typography variant="body2" color="textSecondary" gutterBottom>
						I would like to draw your attention to the fact that MagicVault uses multiple sources of
						data provided by third parties.
					</Typography>
					<Typography variant="body2" color="textSecondary" gutterBottom>
						The search results are provided by the{' '}
						<Link target="_blank" rel="noopener" href="https://scryfall.com/">
							Scryfall API
						</Link>{' '}
						which itself uses other data sources. Portions of Scryfall are unofficial Fan Content
						permitted under the{' '}
						<Link target="_blank" rel="noopener" href="https://company.wizards.com/fancontentpolicy">
							Wizards of the Coast Fan Content Policy
						</Link>
						.
					</Typography>
					<Typography variant="body2" color="textSecondary">
						If you find any vices, errors or malfunctions, please let me know so that I can correct
						them.
					</Typography>
				</Information>
			</div>
		</div>
	);
};

export default Footer;
