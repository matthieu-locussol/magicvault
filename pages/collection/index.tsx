import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Card from '@/components/Card';
import Column from '@/components/Layout/Column';
import Layout from '@/components/Layout/Layout';
import { useSession } from 'next-auth/client';
import { useStore } from '@/store';
import { useUpdateProfile } from '@/hooks/useUpdateProfile';
import { useCacheScryfallSets } from '@/hooks/useCacheScryfallSets';
import CardOwned from '@/components/Card/Owned/CardOwned';
import CardOwnedLink from '@/components/Card/Owned/CardOwnedLink';
import { computeCollectionValue } from '@/utils/utils';
import Title from '@/components/Page/Title';

const Collection = () => {
	const router = useRouter();
	const [store] = useStore();
	const [session, loading] = useSession();
	const updateProfile = useUpdateProfile();
	const cacheScryfallSets = useCacheScryfallSets();

	const prices = computeCollectionValue(store.profile.ownedCards, store.profile.ownedIdentifiers);

	useEffect(() => {
		cacheScryfallSets();
	}, []);

	useEffect(() => {
		if (!loading && store.profile.ownedCards.length === 0) {
			updateProfile();
		}
	}, [loading]);

	if (loading) {
		return null;
	}

	if (!loading && !session) {
		router.push('/');
		return null;
	}

	return (
		<Layout
			title={<Title title="My collection" count={store.profile.ownedCards.length} price={prices.usd} />}>
			<Column type="left">
				<Card>
					<h1>Filters</h1>
					<p>Work in progress.</p>
				</Card>
				{store.profile.ownedCollectionId && (
					<CardOwnedLink collectionId={store.profile.ownedCollectionId} />
				)}
			</Column>
			<Column type="right">
				<Card noPadding>
					<CardOwned />
				</Card>
			</Column>
		</Layout>
	);
};

export default Collection;
