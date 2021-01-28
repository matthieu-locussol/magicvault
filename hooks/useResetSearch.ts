import { useStore } from '@/store';

export const useResetSearch = () => {
	const [, dispatch] = useStore();

	return async () => {
		dispatch({ type: 'RESET_SEARCH' });
	};
};
