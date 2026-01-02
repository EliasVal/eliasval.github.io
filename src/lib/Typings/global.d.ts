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
