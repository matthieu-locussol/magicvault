import React from 'react';
import { Link as MuiLink, LinkProps } from '@material-ui/core';
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

type LinkRef =
	| ((instance: HTMLSpanElement | null) => void)
	| React.RefObject<HTMLSpanElement>
	| null
	| undefined;

const Link = (props: LinkProps, ref: LinkRef) => {
	const classes = useStyles();

	return <MuiLink ref={ref} className={classes.root} {...props} />;
};

export default React.forwardRef(Link);
