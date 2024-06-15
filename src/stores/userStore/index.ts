import { getContext, setContext } from 'svelte';
import { makeStore } from './store';

type Store = ReturnType<typeof makeStore>;

const key = '$stores/userStore';

export const createUserStore = () => {
	const store = makeStore();
	setContext(key, store);
};

export const getUserStore = () => {
	const store = getContext<Store>(key);

	if (!store) {
		throw Error('Call outside UserStore initialized');
	}

	return store;
};
