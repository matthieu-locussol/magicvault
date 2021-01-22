import React from 'react';
import { Typography } from '@material-ui/core';
import Card from '@/components/Card';
import Column from '@/components/Layout/Column';
import Layout from '@/components/Layout/Layout';

const SignOut = () => (
	<Layout>
		<Column type="full">
			<Card>
				<Typography variant="h5" gutterBottom>
					You successfully logged out!
				</Typography>
			</Card>
		</Column>
	</Layout>
);

export default SignOut;
