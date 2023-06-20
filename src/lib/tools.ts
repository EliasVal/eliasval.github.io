import { writable } from 'svelte/store';

export const currentProjectIndex = writable(0);
export const galleryFlyDir = writable(0);
export const galleryTransitionEnded = writable(true);
export const galleryIsFocused = writable(false);
