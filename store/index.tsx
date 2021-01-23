import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type ActionType =
	| {
			type: 'START_SEARCH';
			terms: string;
	  }
	| {
			type: 'END_SEARCH';
			results: any[] | undefined;
	  };

interface StateInterface {
	search: {
		terms: string;
		results: any[] | undefined;
		loading: boolean;
	};
}

const initialState: StateInterface = {
	search: {
		terms: '',
		results: [],
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
					terms: action.terms,
					results: [],
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
