export const galleryState = $state({
	index: 0,
	flyDirection: 0,
	inTransition: false,
	isFocused: false
});

export function nextProject(projectsLength: number) {
	const oldIndex = galleryState.index;
	galleryState.index = galleryState.index + 1 >= projectsLength ? 0 : galleryState.index + 1;
	galleryState.flyDirection = oldIndex < galleryState.index ? -1 : 1;
	galleryState.inTransition = true;
}

export function prevProject(projectsLength: number) {
	const oldIndex = galleryState.index;
	galleryState.index = galleryState.index - 1 < 0 ? projectsLength - 1 : galleryState.index - 1;
	galleryState.flyDirection = oldIndex < galleryState.index ? -1 : 1;
	galleryState.inTransition = true;
}
