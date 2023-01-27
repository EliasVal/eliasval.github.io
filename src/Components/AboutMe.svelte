<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	import { cubicOut } from 'svelte/easing';

	const age: number =
		// @ts-ignore
		new Date(new Date() - new Date(2005, 11, 25)).getFullYear() - 1970;
</script>

<div id="about">
	<div id="header">
		<div in:fly={{ x: -60, duration: 850, easing: cubicOut, delay: 100 }} id="title">
			A little bit
			<br />
			<div in:fly={{ x: -50, duration: 750, delay: 200, easing: cubicOut }} id="subtitle">
				About Me
			</div>
		</div>
	</div>
	<div id="content">
		<p>
			Hello! I'm Elias! I'm a {age} year old developer, and I make anything from Websites, to games to
			Discord bots. I've been programming since 11, starting off with web development with HTML and CSS.
			I've learned C# at 12 and got into game development using the Unity Game Engine. Nowadays, I use:
			Languages: C#, JavaScript & TypeScript, HTML, CSS & SCSS Frameworks/Libraries: discord.js (v12,
			v13), Svelte & SvelteKit, React, Firebase, ASP.NET, Electron
		</p>
	</div>
</div>

<style lang="scss">
	#about {
		height: 100%;

		#header {
			margin: 4em 5em;
			background-color: transparent;
			#title {
				font-size: 4em;
				font-weight: bold;

				#subtitle {
					font-size: 1.75em;
					background: linear-gradient(
						to right,
						rgb(235, 116, 19) 40%,
						rgb(212, 124, 51),
						rgb(226, 146, 81)
					);
					background-clip: text;
					-webkit-text-fill-color: transparent;

					margin-left: 0.75rem;
				}
			}
			display: inline-block;
		}

		#content {
			> p {
				max-width: 60ch;
				margin: 0 auto;
				font-size: 1.3em;
			}
		}
	}
</style>
