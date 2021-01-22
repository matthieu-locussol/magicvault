import React from 'react';
import { Link, LinkProps } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'&:hover': {
				color: `${theme.palette.text.primary}CC`,
				textDecoration: 'none',
			},
		},
	}),
);

const Logo = React.forwardRef((props: LinkProps, ref: any) => {
	const classes = useStyles();

	return <Link ref={ref} className={classes.root} {...props} />;
});

export default Logo;
