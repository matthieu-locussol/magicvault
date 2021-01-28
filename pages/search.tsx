import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Card from '@/components/Card';
import Column from '@/components/Layout/Column';
import Layout from '@/components/Layout/Layout';
import CardResults from '@/components/Card/Results/CardResults';
import { useSearchCards } from '@/hooks/useSearchCards';
import { useStore } from '@/store';

const Search = () => {
	const router = useRouter();
	const searchCards = useSearchCards();
	const [store] = useStore();

	useEffect(() => {
		const { q } = router.query;
		const query = Array.isArray(q) ? q.join('') : q;

		if (query) {
			if (query !== store.search.query) {
				searchCards(query, 0);
			}
		}
	}, [router.query]);

	return (
		<Layout>
			<Column type="full">
				<Card noPadding>
					<CardResults />
				</Card>
			</Column>
		</Layout>
	);
};

export default Search;
