<script lang="ts">
	import { globalState } from '$lib/state.svelte';

	interface Props {
		section: number;
		onClick?: Function;
		children: any;
	}

	const { section, onClick, children }: Props = $props();

	const NavbarButon = (dest: number) => {
		if (dest != -1) {
			document
				.querySelectorAll('section')
				[dest].scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};
</script>

<div>
	<button
		class="navbar-button"
		class:active={globalState.activeSection == section}
		onclick={() => (onClick == null ? NavbarButon(section) : onClick())}
	>
		{@render children()}
	</button>
</div>

<style lang="scss">
	div {
		margin: 0 0.5rem;
		display: inline-block;
	}

	button {
		outline: none;
		border: none;
		cursor: pointer;
		background: none;
		position: relative;
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
		div {
			display: block;
			margin: 0;
			width: 100%;
			&:first-child .navbar-button::before {
				border-top-right-radius: 5px;
			}
		}

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
