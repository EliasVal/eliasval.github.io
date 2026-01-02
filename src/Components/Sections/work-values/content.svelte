<script lang="ts">
	import { slide } from 'svelte/transition';
	import ContentBox from '../../ContentBox.svelte';
	import { cubicInOut } from 'svelte/easing';
</script>

<ContentBox title="Performance & Optimization">
	<article in:slide={{ duration: 1000, delay: 250, easing: cubicInOut }}>
		I specialize in advanced bundle optimization - notably reducing an app's bundle size from
		<strong>27MB down to 3MB</strong>. Whether it is a website or a game, I prioritize efficiency
		and performance to keep the user experience smooth and enjoyable.
	</article>
</ContentBox>

<ContentBox title="SEO & Accessibility">
	<article in:slide={{ duration: 1000, delay: 300, easing: cubicInOut }}>
		I strive to achieve a perfect score in
		<a href="https://web.dev/measure/">Google's lighthouse</a> tool in the SEO and Accessibility criteria
		helping achieve a higher ranking in search engines such as Google and Bing, and allow people with
		impairments to use the website, which they could not do otherwise.
	</article>
</ContentBox>

<ContentBox title="Design">
	<article in:slide={{ duration: 1000, delay: 350, easing: cubicInOut }}>
		I create unique designs for every website and game I make so that every product will feel like a
		unique experience, such as this one. The designs may be simplistic, but they deliver exactly
		what they need to.
	</article>
</ContentBox>

<ContentBox title="Reliability">
	<article in:slide={{ duration: 1000, delay: 450, easing: cubicInOut }}>
		I thrive in fast-paced environments and have a track record of delivering complex features under
		strict deadlines without compromising on code quality or stability.
	</article>
</ContentBox>
