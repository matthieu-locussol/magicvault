import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type ActionType = 'START_SEARCH' | 'END_SEARCH';

interface ActionInterface {
	type: ActionType;
	payload?: any;
}

interface StateInterface {
	search: {
		field: string;
		results: any[];
		loading: boolean;
	};
}

const initialState: StateInterface = {
	search: {
		field: '',
		results: [],
		loading: false,
	},
};

type StoreContextInterface = [StateInterface, Dispatch<ActionInterface>];

interface StoreProviderInterface {
	children: any;
}

const StoreContext = createContext<StoreContextInterface>([initialState, () => {}]);

export const useStore = () => useContext(StoreContext);

const reducer = (state: StateInterface, action: ActionInterface) => {
	let newState = {};

	switch (action.type) {
		case 'START_SEARCH':
			newState = {
				...state,
				search: {
					results: [],
					loading: true,
				},
			};
			break;
		case 'END_SEARCH':
			newState = {
				...state,
				search: {
					results: action.payload,
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
