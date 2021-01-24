import React from 'react';
import { Button, Typography } from '@material-ui/core';
import Card from '@/components/Card';
import Column from '@/components/Layout/Column';
import Layout from '@/components/Layout/Layout';
import { useStore } from '@/store';
import CardImage from '@/components/Card/CardImage';
import ManaCost from '@/components/Card/ManaCost';

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
					{store.search.loading
						? '...'
						: store.search.results === undefined
						? `No results for "${store.search.terms}".`
						: store.search.results.length === 0
						? 'You can search using the SearchBar.'
						: store.search.results.map((res, idx) => (
								<>
									<Typography variant="body2" key={idx}>
										{res.name}
									</Typography>
									<ManaCost value={res.mana_cost} />
									{console.log(res)}
									<CardImage data={res} />
								</>
						  ))}
				</Card>
			</Column>
		</Layout>
	);
};

export default Home;
