<script lang="ts">
	import NavbarButton from './NavbarButton.svelte';
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fly, slide } from 'svelte/transition';

	import close from '../../icons/close.svg?raw';
	import hamburger from '../../icons/hamburger.svg?raw';
	import home from '../../icons/home.svg?raw';
	import logo from '../../icons/logo.svg?raw';
	import external from '../../icons/external.svg?raw';

	const SMALL_SCREEN_WIDTH = 768;
	const SLIDE_TRANSITION_DURATION = 150;

	let navbar: HTMLElement;
	let isNavbarActive = $state(false);
	let isSmallScreen = $state(false);
	let transitioningToSmallScreen = $state(false);

	function dynamicTransition(node: HTMLElement, params?: Record<string, any>) {
		if (isSmallScreen) {
			return slide(node, {
				duration: transitioningToSmallScreen ? 0 : SLIDE_TRANSITION_DURATION,
				easing: cubicInOut
			});
		} else {
			return fly(node, { duration: 750, easing: cubicInOut, y: -50 });
		}
	}

	function screenSizeChanged() {
		isSmallScreen = window.innerWidth <= SMALL_SCREEN_WIDTH;

		if (isSmallScreen) {
			transitioningToSmallScreen = true;
			setTimeout(() => {
				transitioningToSmallScreen = false;
			}, SLIDE_TRANSITION_DURATION);

			isNavbarActive = false;
		} else isNavbarActive = true;
	}

	onMount(() => {
		screenSizeChanged();
	});
</script>

<svelte:window on:resize={screenSizeChanged} />

<div class="navbar-container">
	<button
		class="navbar-toggle block md:hidden"
		class:active={isNavbarActive}
		aria-label="Toggle Navigation Bar"
		onclick={() => {
			isNavbarActive = !isNavbarActive;
		}}
	>
		<div style="width: 32px; height: 32px;">
			{@html isNavbarActive ? close : hamburger}
		</div>
	</button>

	<nav bind:this={navbar} class="navbar">
		{#if isNavbarActive}
			<span
				class="flex justify-between items-center p-0 md:py-2 md:px-4 bg-[#030303]"
				transition:dynamicTransition
			>
				{#if !isSmallScreen}
					<span class="w-32">
						{@html logo}
					</span>
				{/if}
				<div class="nav-buttons">
					<NavbarButton section={0}>
						<span class="block md:hidden"> Home </span>
						<span class="invert hidden md:block [&>svg]:size-6 size-6">
							{@html home}
						</span>
					</NavbarButton>
					<NavbarButton section={1}>About</NavbarButton>
					<NavbarButton section={2}>Work Values</NavbarButton>
					<NavbarButton section={3}>Projects</NavbarButton>
					<NavbarButton
						section={-1}
						onClick={() => window.open('mailto:eliasvalk.dev@gmail.com', '_blank')}
					>
						Contact
						<span class="invert [&>svg]:size-4 ms-1">
							{@html external}
						</span>
					</NavbarButton>
				</div>
			</span>
		{/if}
	</nav>
</div>

<style lang="scss">
	.navbar-container {
		position: fixed;
		z-index: 50;
		top: 0;
		left: 0;
		right: 0;
	}

	button {
		outline: none;
		border: none;
		cursor: pointer;
		background: none;
	}

	.navbar-toggle {
		padding: 2px;
		border: #fff solid 2px;
	}

	.nav-buttons {
		list-style: none;
		z-index: 52;
		display: flex;
		align-items: center;
	}

	@media screen and (max-width: 768px) {
		.navbar-container {
			right: unset;
			top: 1.25rem;
			left: 1.25rem;
		}

		.navbar {
			border-radius: 0 5px 5px 5px;
			overflow: hidden;

			> span {
				flex-direction: column;
				align-items: baseline;
			}
		}

		.nav-buttons {
			width: 100%;
			flex-direction: column;
		}
	}
</style>
