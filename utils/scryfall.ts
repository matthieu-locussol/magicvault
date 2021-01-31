import axios, { AxiosResponse } from 'axios';
import { Card } from '@/types/Card';
import { Set } from '@/types/Set';

// https://scryfall.com/docs/api
export const scryfall = axios.create({
	baseURL: 'https://api.scryfall.com',
});

type SearchCardsResponse = {
	object: 'list';
	total_cards: number;
	has_more: boolean;
	next_page: string;
	data: Card[];
};

// https://scryfall.com/docs/api/cards/search
export const searchCards = (query: string, page: number): Promise<AxiosResponse<SearchCardsResponse>> =>
	scryfall.get('/cards/search', {
		params: {
			q: query,
			page,
			unique: 'prints',
		},
	});

type GetCardsResponse = {
	object: 'list';
	not_found: {
		id: string;
	}[];
	data: Card[];
};

// https://scryfall.com/docs/api/cards/collection
export const getCards = async (identifiers: { id: string }[]): Promise<AxiosResponse<GetCardsResponse>> =>
	scryfall.post('/cards/collection', {
		identifiers,
	});

type GetSetsResponse = {
	object: 'list';
	has_more: boolean;
	data: Set[];
};

// https://scryfall.com/docs/api/sets
export const getSets = async (): Promise<AxiosResponse<GetSetsResponse>> => scryfall.get('/sets');
