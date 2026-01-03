<script>
	export const prerender = true;

	let { children } = $props();
	import './tailwind-setup.css';
</script>

{@render children()}
