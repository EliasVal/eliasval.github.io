<script lang="ts">
	interface Props {
		containerStyle?: Partial<CSSStyleDeclaration>;
		titleStyle?: Partial<CSSStyleDeclaration>;
		undertitleStyle?: Partial<CSSStyleDeclaration>;
		contentStyle?: Partial<CSSStyleDeclaration>;
		title?: string | null;
		undertitle?: string | null;
		children: any;
	}

	const {
		containerStyle = {},
		titleStyle = {},
		undertitleStyle = {},
		contentStyle = {},
		title = null,
		undertitle = null,
		children
	}: Props = $props();

	// https://stackoverflow.com/questions/45205593/how-to-convert-a-json-style-object-to-a-css-string
	const formatToHTMLStyleFromObject = (styleObj: Partial<CSSStyleDeclaration>) => {
		return Object.entries(styleObj)
			.reduce((acc, [key, value]) => `${acc} ${key}: ${value};`, '')
			.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
	};
</script>

<div class="container" style={formatToHTMLStyleFromObject(containerStyle)}>
	{#if title}
		<h2 class="title" style={formatToHTMLStyleFromObject(titleStyle)}>
			{title}
		</h2>
	{/if}
	<div class="content" style={formatToHTMLStyleFromObject(contentStyle)}>
		{@render children()}
	</div>
	{#if undertitle}
		<h2 style={formatToHTMLStyleFromObject(undertitleStyle)}>
			{undertitle}
		</h2>
	{/if}
</div>

<style lang="scss">
	.container {
		max-width: 60ch;
		padding: 0.75em;
		background: linear-gradient(to bottom right, #474747, #616161);
		border-radius: 5px;
		box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.13);
		box-sizing: border-box;

		display: flex;
		flex-direction: column;
		gap: 0.25em;
	}

	.title {
		margin-inline-start: 0.2ch;
	}

	.content {
		background-color: #010101;
		padding: 1rem;
		border-radius: 5px;
		font-size: 1.15em;
		flex-grow: 1;
	}
</style>
