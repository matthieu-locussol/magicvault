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

const Owned = () => {
	const router = useRouter();
	const [store] = useStore();
	const [session, loading] = useSession();
	const updateProfile = useUpdateProfile();
	const cacheScryfallSets = useCacheScryfallSets();

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
		<Layout>
			<Column type="left">
				<Card>
					<h1>Filters</h1>
				</Card>
				<CardOwnedLink collectionId="288886754996388357" />
			</Column>
			<Column type="right">
				<Card noPadding>
					<CardOwned />
				</Card>
			</Column>
		</Layout>
	);
};

export default Owned;
