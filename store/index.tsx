import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { Card } from '@/types/Card';
import { CardIdentifier } from '@/utils/api';

type ActionType =
	| {
			type: 'START_SEARCH';
			query: string;
	  }
	| {
			type: 'END_SEARCH';
			page: number;
			results: Card[] | undefined;
			resultsCount: number;
	  }
	| {
			type: 'START_UPDATE_PROFILE';
	  }
	| {
			type: 'END_UPDATE_PROFILE';
			ownedCards: Card[];
			ownedIdentifiers: CardIdentifier[];
	  }
	| {
			type: 'PAGINATE_OWNED';
			newPage: number;
	  }
	| {
			type: 'START_UPDATE_OWNED';
			card: Card;
			amount: number;
	  }
	| {
			type: 'END_UPDATE_OWNED';
	  };

interface StateInterface {
	search: {
		page: number;
		query: string;
		results: Card[] | undefined;
		resultsCount: number;
		loading: boolean;
	};
	profile: {
		ownedIdentifiers: CardIdentifier[];
		ownedCards: Card[];
		ownedPage: number;
		loading: boolean;
	};
	owned: {
		updatingId: string | null;
		loading: boolean;
	};
}

const initialState: StateInterface = {
	search: {
		page: 0,
		query: '',
		results: [],
		resultsCount: 0,
		loading: false,
	},
	profile: {
		ownedIdentifiers: [],
		ownedCards: [],
		ownedPage: 0,
		loading: false,
	},
	owned: {
		updatingId: null,
		loading: false,
	},
};

type StoreContextInterface = [StateInterface, Dispatch<ActionType>];

interface StoreProviderInterface {
	children: any;
}

const StoreContext = createContext<StoreContextInterface>([initialState, () => {}]);

export const useStore = () => useContext(StoreContext);

const reducer = (state: StateInterface, action: ActionType) => {
	let newState = {};

	switch (action.type) {
		case 'START_SEARCH':
			newState = {
				...state,
				search: {
					...state.search,
					page: 0,
					query: action.query,
					results: [],
					resultsCount: 0,
					loading: true,
				},
			};
			break;
		case 'END_SEARCH':
			newState = {
				...state,
				search: {
					...state.search,
					page: action.page,
					results: action.results,
					resultsCount: action.resultsCount,
					loading: false,
				},
			};
			break;
		case 'START_UPDATE_PROFILE':
			newState = {
				...state,
				profile: {
					...state.profile,
					ownedIdentifiers: [],
					ownedCards: [],
					loading: true,
				},
			};
			break;
		case 'END_UPDATE_PROFILE':
			newState = {
				...state,
				profile: {
					...state.profile,
					ownedIdentifiers: action.ownedIdentifiers,
					ownedCards: action.ownedCards,
					loading: false,
				},
			};
			break;
		case 'PAGINATE_OWNED':
			newState = {
				...state,
				profile: {
					...state.profile,
					ownedPage: action.newPage,
				},
			};
			break;
		case 'START_UPDATE_OWNED':
			let newOwnedCards = state.profile.ownedCards;
			let newOwnedIdentifiers = state.profile.ownedIdentifiers;

			const existingCardIndex = newOwnedCards.findIndex((c) => c.id === action.card.id);
			const existingIdentifierIndex = newOwnedIdentifiers.findIndex((e) => e.id === action.card.id);

			if (existingIdentifierIndex !== -1) {
				if (action.amount > 0) {
					newOwnedIdentifiers[existingIdentifierIndex].amount = action.amount;
				} else {
					newOwnedCards.splice(existingCardIndex, 1);
					newOwnedIdentifiers.splice(existingIdentifierIndex, 1);
				}
			} else {
				newOwnedCards.push(action.card);
				newOwnedIdentifiers.push({ id: action.card.id, amount: action.amount });
			}

			newState = {
				...state,
				profile: {
					...state.profile,
					ownedCards: newOwnedCards,
					ownedIdentifiers: newOwnedIdentifiers,
				},
				owned: {
					...state.owned,
					updatingId: action.card.id,
					loading: true,
				},
			};
			break;
		case 'END_UPDATE_OWNED':
			newState = {
				...state,
				owned: {
					...state.owned,
					updatingId: undefined,
					loading: false,
				},
			};
			break;
		default:
			newState = state;
			break;
	}

	return newState as StateInterface;
};

export const StoreProvider = ({ children }: StoreProviderInterface) => {
	const hook = useReducer(reducer, initialState);

	return <StoreContext.Provider value={hook}>{children}</StoreContext.Provider>;
};
