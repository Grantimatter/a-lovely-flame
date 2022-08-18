import type { Product } from '$lib/Product';
import type { User } from 'firebase/auth';
import { writable } from 'svelte/store';
import { getCurrentUser, signIn, signOutUser } from '$lib/utility/firebase/firebaseApp';

const user = writable<User | null>();

export const userStore = {
	subscribe: user.subscribe,
	signOut: () => {
		signOutUser();
		user.update((n) => null);
	},
	checkSignIn: () => {
		let currentUser: User | null = getCurrentUser();
		if (currentUser) {
			user.update((n) => currentUser);
		} else {
			user.update((n) => null);
		}
	},
};
