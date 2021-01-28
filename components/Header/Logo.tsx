import React from 'react';
import { useRouter } from 'next/router';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Link from '@/components/Link';
import { useResetSearch } from '@/hooks/useResetSearch';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			fontFamily: 'Metamorphous',
			marginRight: theme.spacing(2),
			'&:hover': {
				color: `${theme.palette.text.primary}CC`,
				cursor: 'pointer',
				textDecoration: 'none',
			},
		},
	}),
);

const Logo = () => {
	const router = useRouter();
	const classes = useStyles();
	const resetSearch = useResetSearch();

	const reset = async () => {
		await resetSearch();
		router.push('/search');
	};

	return (
		<Link color="textPrimary" variant="h5" className={classes.root} onClick={reset}>
			<b>M</b>agic<b>V</b>ault
		</Link>
	);
};

export default Logo;
