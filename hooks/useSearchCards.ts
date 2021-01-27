import { useStore } from '@/store';
import { searchCards } from '@/utils/scryfall';

export const useSearchCards = () => {
	const [store, dispatch] = useStore();

	return async (query: string, page = 0) => {
		if (!store.search.loading && query.length > 0) {
			try {
				dispatch({ type: 'START_SEARCH', query });
				const results = await searchCards(query, page + 1);
				if (results.status === 200) {
					dispatch({
						type: 'END_SEARCH',
						page,
						results: results.data.data,
						resultsCount: results.data.total_cards,
					});
				} else {
					dispatch({ type: 'END_SEARCH', page: 0, results: [], resultsCount: 0 });
				}
			} catch (error) {
				dispatch({ type: 'END_SEARCH', page: 0, results: undefined, resultsCount: 0 });
			}
		}
	};
};
