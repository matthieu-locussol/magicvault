import React from 'react';
import NextLink from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Link from '@/components/Link';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			fontFamily: 'Metamorphous',
			marginRight: 'auto',
			'&:hover': {
				color: `${theme.palette.text.primary}CC`,
				textDecoration: 'none',
			},
		},
	}),
);

const Logo = () => {
	const classes = useStyles();

	return (
		<NextLink href="/" passHref>
			<Link color="textPrimary" variant="h5" className={classes.root}>
				<b>M</b>agic<b>V</b>ault
			</Link>
		</NextLink>
	);
};

export default Logo;
