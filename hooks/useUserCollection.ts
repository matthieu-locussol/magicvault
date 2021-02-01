import { getUserCollection } from '@/utils/api';
import { getCards } from '@/utils/scryfall';
import { Card } from '@/types/Card';

const CARDS_PER_PAGE = 75;

export const useUserCollection = () => {
	return async (collectionId: string) => {
		const responseIdentifiers = await getUserCollection(collectionId);
		const identifiers = responseIdentifiers.data.data;

		const callsCount = Math.ceil(identifiers.length / CARDS_PER_PAGE);
		let userCards: Card[] = [];

		for (let i = 0; i < callsCount; ++i) {
			const ids = identifiers.slice(i * CARDS_PER_PAGE, (i + 1) * CARDS_PER_PAGE);
			const responseCards = await getCards(ids);
			userCards = [...userCards, ...responseCards.data.data];
		}

		return {
			cards: userCards,
			amount: identifiers,
		};
	};
};
