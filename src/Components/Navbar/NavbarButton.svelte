<script lang="ts">
	import { activeSection } from '$lib/current-section.svelte';

	interface Props {
		section: number;
		onClick?: Function;
		children: any;
		title?: string;
	}

	const { section, onClick, children, title = '' }: Props = $props();

	const NavbarButon = (dest: number) => {
		if (dest != -1) {
			document
				.querySelectorAll('section')
				[dest].scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};
</script>

<button
	class="navbar-button"
	class:active={activeSection.index == section}
	onclick={() => (onClick == null ? NavbarButon(section) : onClick())}
	{title}
>
	{@render children()}
</button>

<style lang="scss">
	button {
		outline: none;
		border: none;
		cursor: pointer;
		background: none;
		position: relative;
		margin: 0 0.5rem;
		display: inline-block;
	}

	.navbar-button {
		padding: 0.3em 0.5em;
		font-size: 1.45rem;

		&::before {
			position: absolute;
			content: '';
			inset: 0;

			background-image: linear-gradient(to bottom right, rgb(13, 192, 192), royalblue 95%);
			z-index: -1;
			border-radius: 15px;
			opacity: 0;

			transition: opacity 0.25s;
		}
	}

	button:global(.active)::before {
		opacity: 1;
	}

	@media screen and (max-width: 820px) {
		.navbar-button {
			width: 100%;
			text-align: left;
			font-size: 1.25rem !important;
			&::before {
				border-radius: 0;
				width: 100%;
			}
		}
	}
</style>
