import { useStore } from '@/store';
import { searchCards } from '@/api/scryfall';

export const useSearchCards = () => {
	const [store, dispatch] = useStore();

	return async (query: string) => {
		if (!store.search.loading) {
			try {
				dispatch({ type: 'START_SEARCH', terms: query });
				const results = await searchCards(query);
				if (results.status === 200) {
					dispatch({ type: 'END_SEARCH', results: results.data.data });
				} else {
					dispatch({ type: 'END_SEARCH', results: [] });
				}
			} catch (error) {
				dispatch({ type: 'END_SEARCH', results: undefined });
			}
		}
	};
};
