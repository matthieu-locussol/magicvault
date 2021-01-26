import { useStore } from '@/store';
import { useSession } from 'next-auth/client';

export const usePaginateOwned = () => {
	const [, dispatch] = useStore();

	return async (newPage: number) => {
		dispatch({ type: 'PAGINATE_OWNED', newPage });
	};
};
