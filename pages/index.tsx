import React from 'react';
import { Button, Typography } from '@material-ui/core';
import Card from '@/components/Card';
import Column from '@/components/Layout/Column';
import Layout from '@/components/Layout/Layout';
import { useStore } from '@/store';

const Home = () => {
	const [store] = useStore();

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
						Results
					</Typography>
					<Typography variant="body2" gutterBottom>
						{store.search.results.length > 0 ? JSON.stringify(store.search.results) : 'No results'}
					</Typography>
				</Card>
			</Column>
		</Layout>
	);
};

export default Home;
