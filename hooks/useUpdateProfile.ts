import { useStore } from '@/store';
import { getOwnedIds } from '@/utils/api';
import { getCards } from '@/utils/scryfall';
import { useSession } from 'next-auth/client';
import { Card } from '@/types/Card';

export const useUpdateProfile = () => {
	const [session] = useSession();
	const [, dispatch] = useStore();

	return async () => {
		if (session) {
			dispatch({ type: 'START_UPDATE_PROFILE' });
			const responseOwnedsIds = await getOwnedIds(session?.user.email || '');
			const ownedIds = responseOwnedsIds.data.body[0].data.cards.map((id: string) => ({ id }));

			const callsCount = Math.ceil(ownedIds.length / 75);
			let ownedCards: Card[] = [];

			for (let i = 0; i < callsCount; ++i) {
				const ids = ownedIds.slice(i * 75, (i + 1) * 75);
				const responseOwnedCards = await getCards(ids);
				ownedCards = [...ownedCards, ...responseOwnedCards.data.data];
			}

			dispatch({ type: 'END_UPDATE_PROFILE', ownedCards });
		}
	};
};
