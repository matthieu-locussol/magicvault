import Card from '@/components/Card';
import Column from '@/components/Layout/Column';
import Layout from '@/components/Layout/Layout';
import CardResults from '@/components/Card/Results/CardResults';

const Home = () => (
	<Layout>
		<Column type="full">
			<Card noPadding>
				<CardResults />
			</Card>
		</Column>
	</Layout>
);

export default Home;
