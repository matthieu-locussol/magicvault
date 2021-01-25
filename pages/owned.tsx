import { useEffect } from 'react';
import Card from '@/components/Card';
import Column from '@/components/Layout/Column';
import Layout from '@/components/Layout/Layout';
import CardResults from '@/components/Card/Results/CardResults';
import { useSession } from 'next-auth/client';
import { useStore } from '@/store';
import { useUpdateProfile } from '@/hooks/useUpdateProfile';

const Owned = () => {
	const [store] = useStore();
	const [, loading] = useSession();
	const updateProfile = useUpdateProfile();

	useEffect(() => {
		if (!loading) {
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
					<CardResults />
				</Card>
				{store.profile.loading ? '...' : JSON.stringify(store?.profile?.ownedCards.length)}
			</Column>
		</Layout>
	);
};

export default Owned;
