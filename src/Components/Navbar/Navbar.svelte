<script lang="ts">
	import NavbarButton from './NavbarButton.svelte';
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import close from '../../icons/close.svg?raw';
	import hamburger from '../../icons/hamburger.svg?raw';

	let navbar: HTMLElement;
	let screenWidth: number = $state(window.innerWidth);
	let isNavbarActive = $state(false);

	const UpdateNavbar = () => {
		screenWidth = window.innerWidth;
		const smallScreen = screenWidth <= 820;
		if (!smallScreen) isNavbarActive = true;

		navbar.style.padding = smallScreen ? '0' : '0.5rem 1rem';
	};

	onMount(() => {
		UpdateNavbar();
		if (screenWidth <= 820) isNavbarActive = false;

		setTimeout(() => {
			navbar.style.animationDelay = '0ms';
		}, 2500);
	});
</script>

<svelte:window on:resize={UpdateNavbar} />

<div class="navbar-container">
	{#if screenWidth <= 820}
		<button
			class="navbar-toggle"
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
	{/if}

	<nav bind:this={navbar} class="navbar">
		{#if screenWidth > 820 || isNavbarActive}
			<span transition:slide={{ easing: cubicInOut, duration: 150 }}>
				<span>
					<svg class="logo" viewBox="0 0 44 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.176 11V2.6H6.168V3.584H2.22V6.164H4.824V7.148H2.22V10.004H6.432V11H1.176ZM8.23959 11V2.828L9.28359 2.336V11H8.23959ZM11.3322 11V4.868H12.3762V11H11.3322ZM11.8482 3.752C11.6682 3.752 11.5142 3.69 11.3862 3.566C11.2622 3.438 11.2002 3.284 11.2002 3.104C11.2002 2.916 11.2622 2.758 11.3862 2.63C11.5142 2.498 11.6682 2.432 11.8482 2.432C12.0362 2.432 12.1922 2.498 12.3162 2.63C12.4442 2.758 12.5082 2.916 12.5082 3.104C12.5082 3.284 12.4442 3.438 12.3162 3.566C12.1922 3.69 12.0362 3.752 11.8482 3.752ZM16.1431 11.144C15.4791 11.144 14.9571 10.96 14.5771 10.592C14.1971 10.224 14.0071 9.72 14.0071 9.08C14.0071 8.668 14.1011 8.31 14.2891 8.006C14.4771 7.702 14.7431 7.468 15.0871 7.304C15.4311 7.136 15.8351 7.052 16.2991 7.052C16.5991 7.052 16.8791 7.086 17.1391 7.154C17.4031 7.218 17.6511 7.316 17.8831 7.448V7.016C17.8831 6.54 17.7751 6.192 17.5591 5.972C17.3431 5.748 17.0071 5.636 16.5511 5.636C16.2591 5.636 15.9551 5.69 15.6391 5.798C15.3271 5.906 15.0351 6.056 14.7631 6.248L14.4631 5.372C14.7711 5.168 15.1211 5.01 15.5131 4.898C15.9091 4.782 16.2991 4.724 16.6831 4.724C17.4111 4.724 17.9571 4.91 18.3211 5.282C18.6851 5.65 18.8671 6.2 18.8671 6.932V11H17.8831V10.436C17.6431 10.664 17.3731 10.84 17.0731 10.964C16.7731 11.084 16.4631 11.144 16.1431 11.144ZM16.2991 10.232C16.5831 10.232 16.8631 10.162 17.1391 10.022C17.4191 9.882 17.6671 9.684 17.8831 9.428V8.372C17.6791 8.244 17.4471 8.144 17.1871 8.072C16.9271 8 16.6791 7.964 16.4431 7.964C15.9951 7.964 15.6411 8.066 15.3811 8.27C15.1211 8.47 14.9911 8.744 14.9911 9.092C14.9911 9.444 15.1071 9.722 15.3391 9.926C15.5711 10.13 15.8911 10.232 16.2991 10.232ZM22.4955 11.144C22.0635 11.144 21.6475 11.052 21.2475 10.868C20.8515 10.68 20.5275 10.428 20.2755 10.112L21.0195 9.476C21.2355 9.708 21.4755 9.888 21.7395 10.016C22.0035 10.144 22.2635 10.208 22.5195 10.208C22.8795 10.208 23.1595 10.14 23.3595 10.004C23.5595 9.864 23.6595 9.672 23.6595 9.428C23.6595 9.268 23.6135 9.124 23.5215 8.996C23.4335 8.868 23.2855 8.746 23.0775 8.63C22.8735 8.514 22.5995 8.392 22.2555 8.264C21.5795 8.012 21.0935 7.738 20.7975 7.442C20.5055 7.146 20.3595 6.78 20.3595 6.344C20.3595 5.864 20.5495 5.474 20.9295 5.174C21.3135 4.874 21.8115 4.724 22.4235 4.724C22.8435 4.724 23.2295 4.804 23.5815 4.964C23.9335 5.12 24.2355 5.348 24.4875 5.648L23.7675 6.248C23.3995 5.856 22.9475 5.66 22.4115 5.66C22.0955 5.66 21.8455 5.722 21.6615 5.846C21.4815 5.966 21.3915 6.132 21.3915 6.344C21.3915 6.548 21.4935 6.728 21.6975 6.884C21.9055 7.036 22.2795 7.212 22.8195 7.412C23.2595 7.572 23.6155 7.746 23.8875 7.934C24.1635 8.122 24.3635 8.336 24.4875 8.576C24.6155 8.816 24.6795 9.092 24.6795 9.404C24.6795 9.944 24.4855 10.37 24.0975 10.682C23.7095 10.99 23.1755 11.144 22.4955 11.144Z"
							fill="white"
						/>
						<path d="M26 1H26.9V11H26V1Z" fill="white" />
						<path d="M32 1H33L27 11H26L32 1Z" fill="white" />
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M29.206 10.592C29.586 10.96 30.108 11.144 30.772 11.144C31.092 11.144 31.402 11.084 31.702 10.964C32.002 10.84 32.272 10.664 32.512 10.436V11H33.496V6.932C33.496 6.2 33.314 5.65 32.95 5.282C32.7549 5.08259 32.5075 4.93663 32.2077 4.84411L31.6727 5.69052C31.8872 5.74441 32.059 5.83823 32.188 5.972C32.404 6.192 32.512 6.54 32.512 7.016V7.448C32.28 7.316 32.032 7.218 31.768 7.154C31.508 7.086 31.228 7.052 30.928 7.052C30.8885 7.052 30.8494 7.05261 30.8108 7.05383L30.0697 8.22607C30.3233 8.05136 30.6574 7.964 31.072 7.964C31.308 7.964 31.556 8 31.816 8.072C32.076 8.144 32.308 8.244 32.512 8.372V9.428C32.296 9.684 32.048 9.882 31.768 10.022C31.492 10.162 31.212 10.232 30.928 10.232C30.52 10.232 30.2 10.13 29.968 9.926C29.736 9.722 29.62 9.444 29.62 9.092C29.62 9.03224 29.6238 8.97466 29.6315 8.91926L28.8646 10.1323C28.9529 10.3038 29.0667 10.4571 29.206 10.592ZM35.3724 2.828V11H36.4164V2.336L35.3724 2.828ZM38.453 2.828V11H39.497V8.228L40.397 7.292L42.293 11H43.433L41.129 6.536L42.737 4.868H41.489L39.497 6.98V2.336L38.453 2.828Z"
							fill="white"
						/>
					</svg>
				</span>
				<div class="nav-buttons">
					<NavbarButton section={0}>
						{#if screenWidth <= 820}
							Home
						{:else}
							<img style="display: block;" width="25px" src="/svgs/home.svg" alt="Home" />
						{/if}
					</NavbarButton>
					<NavbarButton section={1}>About</NavbarButton>
					<NavbarButton section={2}>Work Values</NavbarButton>
					<NavbarButton section={3}>Projects</NavbarButton>
					<NavbarButton
						section={-1}
						onClick={() => window.open('mailto:eliasvalk.dev@gmail.com', '_blank')}
					>
						Contact <img class="external" alt="" src="/svgs/external.svg" />
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

	.navbar {
		transform: translateY(-100%);
		animation: navbarFly 750ms ease-in-out forwards;
		animation-delay: 1500ms;

		> span {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		background-color: #030303;

		.logo {
			width: 7.5rem;
			vertical-align: middle;
		}
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
		box-sizing: content-box;
	}

	img {
		filter: invert(1);

		&.external {
			width: 0.75em;
			margin-left: 0.25em;
		}
	}

	.nav-buttons {
		list-style: none;
		z-index: 52;
		display: flex;
		align-items: center;
	}

	@media screen and (max-width: 820px) {
		.navbar-container {
			right: unset;
			top: 1.25rem;
			left: 1.25rem;
		}

		.navbar {
			border-radius: 0 5px 5px 5px;
			animation: none;
			transform: initial;

			> span {
				flex-direction: column;
				align-items: baseline;
			}
		}

		.nav-buttons {
			width: 100%;
			flex-direction: column;
		}

		.navbar .logo {
			display: none;
		}
	}

	@keyframes navbarFly {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(0);
		}
	}
</style>
