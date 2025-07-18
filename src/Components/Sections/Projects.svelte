<script lang="ts">
	import ProjectGallery from '../Projects/ProjectGallery.svelte';

	import { projects } from '$lib/data';
	import { globalState } from '$lib/state.svelte';

	import { onMount } from 'svelte';
	import SectionTitle from '../SectionTitle.svelte';

	onMount(() => (globalState.galleryIsFocused = true));
</script>

<div id="projects">
	<SectionTitle rgbValues={['#0FF0FF', '#0FFFFF', '#FFFFFF']} direction={'to top right'} stickLeft>
		My Projects
	</SectionTitle>
	<ProjectGallery {projects} />
</div>

<style lang="scss">
	#projects {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		gap: 5rem;
		padding-bottom: 5rem;
	}
</style>
