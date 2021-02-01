import { useStore } from '@/store';
import { getOwnedIdentifiers, createOwnedIdentifiers } from '@/utils/api';
import { getCards } from '@/utils/scryfall';
import { useSession } from 'next-auth/client';
import { Card } from '@/types/Card';

const CARDS_PER_PAGE = 75;

export const useUpdateProfile = () => {
	const [session] = useSession();
	const [, dispatch] = useStore();

	return async () => {
		if (session) {
			dispatch({ type: 'START_UPDATE_PROFILE' });

			if (session.user.email) {
				let responseOwnedsIdentifiers = await getOwnedIdentifiers(session.user.email);
				let ownedIdentifiers = responseOwnedsIdentifiers.data.data;
				const collectionId = responseOwnedsIdentifiers.data.collectionId;

				if (responseOwnedsIdentifiers.data.statusCode === 400) {
					await createOwnedIdentifiers(session.user.email);

					responseOwnedsIdentifiers = await getOwnedIdentifiers(session.user.email);
					ownedIdentifiers = responseOwnedsIdentifiers.data.data;
				}

				const cardsIds = ownedIdentifiers.map((identifier) => ({ id: identifier.id }));

				const callsCount = Math.ceil(cardsIds.length / CARDS_PER_PAGE);
				let ownedCards: Card[] = [];

				for (let i = 0; i < callsCount; ++i) {
					const ids = cardsIds.slice(i * CARDS_PER_PAGE, (i + 1) * CARDS_PER_PAGE);
					const responseOwnedCards = await getCards(ids);
					ownedCards = [...ownedCards, ...responseOwnedCards.data.data];
				}

				dispatch({ type: 'END_UPDATE_PROFILE', ownedCards, ownedIdentifiers, collectionId });
			}
		}
	};
};
