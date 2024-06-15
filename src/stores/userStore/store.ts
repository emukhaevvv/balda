import { writable } from 'svelte/store';

export const makeStore = () => {
	const userId = writable('');

	const setUserId = (id: string) => {
		userId.set(id);
	};

	return {
		userId,
		setUserId
	};
};
