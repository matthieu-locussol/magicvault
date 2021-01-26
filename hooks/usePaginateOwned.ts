import { useStore } from '@/store';

export const usePaginateOwned = () => {
	const [, dispatch] = useStore();

	return async (newPage: number) => {
		dispatch({ type: 'PAGINATE_OWNED', newPage });
	};
};
