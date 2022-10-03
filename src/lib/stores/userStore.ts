import { writable } from 'svelte/store';
import User, { getUser, loginUser } from '$lib/model/User';
import { browser } from '$app/env';

const defaultValue = new User("", "");
const initialValue = browser ? await getUser() : defaultValue;
const userStore = writable<User>(initialValue);

userStore.subscribe((user) => {
    if(browser) {
        loginUser(user);
    }
});

export default userStore;