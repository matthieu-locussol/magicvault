import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { Card } from '@/types/Card';

type ActionType =
	| {
			type: 'START_SEARCH';
			page: number;
			query: string;
	  }
	| {
			type: 'END_SEARCH';
			results: Card[] | undefined;
			resultsCount: number;
	  }
	| {
			type: 'START_UPDATE_PROFILE';
	  }
	| {
			type: 'END_UPDATE_PROFILE';
			ownedCards: Card[];
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
		ownedCards: Card[];
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
		ownedCards: [],
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
					page: action.page,
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
					ownedCards: action.ownedCards,
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
