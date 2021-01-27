import axios, { AxiosResponse } from 'axios';

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

export type CardIdentifier = {
	id: string;
	amount: number;
};

type OwnedIdentifiersResponse = {
	statusCode: number;
	data: CardIdentifier[];
};

export const getOwnedIdentifiers = async (email: string): Promise<AxiosResponse<OwnedIdentifiersResponse>> =>
	api.post('', {
		type: 'ownedIdentifiers',
		email,
	});

type UpdateOwnedIdentifiersResponse = {
	statusCode: number;
	data: string;
};

export const updateOwnedIdentifiers = async (
	email: string,
	identifiers: CardIdentifier[],
): Promise<AxiosResponse<UpdateOwnedIdentifiersResponse>> =>
	api.post('', {
		type: 'updateOwnedIdentifiers',
		email,
		identifiers,
	});

type CreateOwnedIdentifiersProps = {
	statusCode: number;
	data: string;
};

export const createOwnedIdentifiers = async (
	email: string,
): Promise<AxiosResponse<CreateOwnedIdentifiersProps>> =>
	api.post('', {
		type: 'createOwnedIdentifiers',
		email,
	});
