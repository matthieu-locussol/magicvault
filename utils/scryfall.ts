import axios from 'axios';

// https://scryfall.com/docs/api
export const scryfall = axios.create({
	baseURL: 'https://api.scryfall.com',
});

// https://scryfall.com/docs/api/cards/search
export const searchCards = (query: string, page: number) =>
	scryfall.get('/cards/search', {
		params: {
			q: query,
			page,
		},
	});

// https://scryfall.com/docs/api/cards/collection
export const getCards = async (identifiers: { id: string }[]) =>
	scryfall.post('/cards/collection', {
		identifiers,
	});
