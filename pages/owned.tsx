import React, { useEffect } from 'react';
import Card from '@/components/Card';
import Column from '@/components/Layout/Column';
import Layout from '@/components/Layout/Layout';
import { useSession } from 'next-auth/client';
import { useStore } from '@/store';
import { useUpdateProfile } from '@/hooks/useUpdateProfile';
import CardOwned from '@/components/Card/Owned/CardOwned';

const Owned = () => {
	const [store] = useStore();
	const [, loading] = useSession();
	const updateProfile = useUpdateProfile();

	useEffect(() => {
		if (!loading && store.profile.ownedCards.length === 0) {
			updateProfile();
		}
	}, [loading]);

	return (
		<Layout>
			<Column type="left">
				<Card>
					<h1>Filters</h1>
				</Card>
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
