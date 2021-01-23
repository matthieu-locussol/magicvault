import { useStore } from '@/store';
import { searchCards } from '@/api/scryfall';

export const useSearchCards = () => {
	const [, dispatch] = useStore();

	return async (query: string) => {
		dispatch({ type: 'START_SEARCH' });

		try {
			const results = await searchCards(query);
			dispatch({ type: 'END_SEARCH', payload: results.data.data });
		} catch (error) {
			console.error(error);
			dispatch({ type: 'END_SEARCH' });
		}
	};
};
