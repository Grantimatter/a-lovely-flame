import { writable } from 'svelte/store';
import User from '../model/User';

export const session = writable<User>(new User("", ""));