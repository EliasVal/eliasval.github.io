// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type Project = {
		img: string;
		title: string;
		description: string;
		status: {
			title: string;
			color: string;
		};
		availableAt: {
			logo: string;
			url: string;
			alt?: string;
		}[];
		madeWith: {
			img: string;
			alt?: string;
		}[];
	};
}

export {};
