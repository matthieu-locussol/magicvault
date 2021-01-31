import { useStore } from '@/store';
import { getSets } from '@/utils/scryfall';

export const useCacheScryfallSets = () => {
	const [store, dispatch] = useStore();

	return async () => {
		if (store.scryfall.sets.length === 0) {
			const response = await getSets();
			const sets = response.data.data;

			dispatch({ type: 'CACHE_SETS', sets });
		}
	};
};
