import React from 'react';
import { Button, Typography } from '@material-ui/core';
import Card from '@/components/Card';
import Column from '@/components/Layout/Column';
import Layout from '@/components/Layout/Layout';

const Home = () => {
	return (
		<Layout>
			<Column type="left">
				<Card>
					<Typography variant="h4" gutterBottom>
						Hello world!
					</Typography>
					<Button variant="contained" color="primary" size="large">
						My special button
					</Button>
				</Card>
			</Column>
			<Column type="right">
				<Card>
					<Typography variant="h4" gutterBottom>
						Hello world!
					</Typography>
					<Button variant="contained" color="primary" size="large">
						My special button
					</Button>
				</Card>
			</Column>
		</Layout>
	);
};

export default Home;
