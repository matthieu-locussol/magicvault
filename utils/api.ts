import axios from 'axios';

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

export const getOwnedIds = async (email: string) =>
	api.post('', {
		type: 'ownedCards',
		email,
	});
