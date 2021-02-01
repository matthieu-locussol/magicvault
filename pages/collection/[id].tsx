import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Card from '@/components/Card';
import Column from '@/components/Layout/Column';
import Layout from '@/components/Layout/Layout';
import { useCacheScryfallSets } from '@/hooks/useCacheScryfallSets';
import CardUserCollection from '@/components/Card/UserCollection/CardUserCollection';
import { useUserCollection } from '@/hooks/useUserCollection';
import { Card as TCard } from '@/types/Card';
import { CardIdentifier } from '@/utils/api';
import { computeCollectionValue } from '@/utils/utils';
import Title from '@/components/Page/Title';

const UserCollection = () => {
	const router = useRouter();
	const userCollection = useUserCollection();
	const cacheScryfallSets = useCacheScryfallSets();
	const [collectionId, setCollectionId] = useState<string | undefined>(undefined);
	const [cards, setCards] = useState<TCard[]>([]);
	const [amount, setAmount] = useState<CardIdentifier[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			const { id } = router.query;
			const collectionId = Array.isArray(id) ? id.join('') : id;

			if (collectionId) {
				setLoading(true);
				setCollectionId(collectionId);

				const cards = await userCollection(collectionId);
				setCards(cards.cards);
				setAmount(cards.amount);
				setLoading(false);

				cacheScryfallSets();
			}
		})();
	}, [router.query]);

	useEffect(() => {
		if (cards.length === 0) {
			setAmount([]);
		}
	}, [cards]);

	if (!collectionId) {
		return null;
	}

	const prices = computeCollectionValue(cards, amount);

	return (
		<Layout
			title={<Title title={`Collection n°${collectionId}`} count={cards.length} price={prices.usd} />}>
			<Column type="left">
				<Card>
					<h1>Filters</h1>
					<p>Work in progress.</p>
				</Card>
			</Column>
			<Column type="right">
				<Card noPadding>
					<CardUserCollection
						collectionId={collectionId}
						cards={cards}
						amount={amount}
						loading={loading}
					/>
				</Card>
			</Column>
		</Layout>
	);
};

export default UserCollection;
