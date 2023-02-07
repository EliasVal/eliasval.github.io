import { writable } from 'svelte/store';

export const currentProjectIndex = writable(0);
export const projectScrollDir = writable(0);
