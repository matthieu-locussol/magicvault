import { useStore } from '@/store';
import { useSession } from 'next-auth/client';
import { Card } from '@/types/Card';
import { updateOwnedIdentifiers } from '@/utils/api';

export const useUpdateOwned = () => {
	const [session] = useSession();
	const [store, dispatch] = useStore();

	return async (card: Card, amount: number) => {
		if (session) {
			dispatch({ type: 'START_UPDATE_OWNED', card, amount });

			if (session.user.email) {
				await updateOwnedIdentifiers(session.user.email, store.profile.ownedIdentifiers);
				dispatch({ type: 'END_UPDATE_OWNED', card, amount });
			}
		}
	};
};
