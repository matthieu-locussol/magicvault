import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@/components/Card';
import Column from '@/components/Layout/Column';
import Layout from '@/components/Layout/Layout';

const useStyles = makeStyles(() =>
	createStyles({
		title: {
			textAlign: 'center',
		},
	}),
);

const SignOut = () => {
	const classes = useStyles();

	return (
		<Layout>
			<Column type="full">
				<Card>
					<Typography variant="h5" className={classes.title}>
						You successfully logged out!
					</Typography>
				</Card>
			</Column>
		</Layout>
	);
};

export default SignOut;
