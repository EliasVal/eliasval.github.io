export const projects: Project[] = [
	{
		img: 'chessed',
		title: 'Chessed',
		description: `Fully functional online chess app with multiplayer, matchmaking and more!
			<br />Made as a school project, using a custom-built chess engine, backend & frontend.
			The backend was built in Node.js, and the frontend in Xamarin. Deployed on Google Cloud Platform.`,
		status: {
			title: 'Completed',
			color: 'limegreen'
		},
		madeWith: [
			{ img: 'cs', alt: 'C#' },
			{ img: 'ts', alt: 'JavaScript' },
			{ img: 'nodejs', alt: 'NodeJS' }
		],
		availableAt: [
			{
				logo: 'github',
				url: 'https://github.com/EliasVal/chessed-frontend',
				alt: 'Frontend Code'
			},
			{
				logo: 'github',
				url: 'https://github.com/EliasVal/chessed-backend',
				alt: 'Backend Code'
			}
		]
	},
	{
		img: 'redalert',
		title: 'Red Alert Discord Bot',
		description:
			'Discord bot made for sending Red Alerts in Discord servers, built using Node.js and Discord.js, deployed on Glitch.',
		status: {
			title: 'Completed',
			color: 'limegreen'
		},
		madeWith: [
			{ img: 'nodejs', alt: 'NodeJS' },
			{ img: 'js', alt: 'JavaScript' }
		],
		availableAt: [
			{
				logo: 'github',
				url: 'https://github.com/EliasVal/RedAlert-Discord-Bot',
				alt: 'Source Code (Github)'
			}
		]
	},
	{
		img: 'bulletfest',
		title: 'BULLETFEST',
		description: `2D Party-game to fool around with goofy weapons! The project was discontinued due to lack of time and resources.<br>
			The game featured online multiplayer, various game-modes, and a companion Discord bot for community features! The game was built using the Unity Engine, with Firebase as backend services.`,
		status: {
			title: 'Discontinued',
			color: 'darkred'
		},
		madeWith: [
			{ img: 'unity', alt: 'Unity Engine' },
			{ img: 'firebase', alt: 'Firebase' },
			{ img: 'cs', alt: 'C#' },
			{ img: 'ts', alt: 'TypeScript' }
		],
		availableAt: [
			{
				logo: 'discord',
				url: 'https://discord.com/invite/raupcYM4Gj',
				alt: 'Discord Server'
			},
			{
				logo: 'github',
				url: 'https://github.com/BULLETFEST/BULLETFEST',
				alt: 'Source Code (Github)'
			},
			{
				logo: 'github',
				url: 'https://github.com/BULLETFEST/JooBot',
				alt: 'Companion Discord bot'
			}
		]
	},
	{
		img: 'driveBot',
		title: 'Drive Bot',
		description:
			'A Commissioned Discord bot made to manage a "Virtual file system" within a Discord server.<br>The project was completed and delivered to the client successfully.',
		status: {
			title: 'Completed',
			color: 'limegreen'
		},
		availableAt: [
			{
				logo: 'github',
				url: 'https://github.com/EliasVal/DiscordCloudBot',
				alt: 'Source Code (Github)'
			}
		],
		madeWith: [
			{ img: 'nodejs', alt: 'NodeJS' },
			{ img: 'ts', alt: 'TypeScript' }
		]
	},
	{
		img: 'alphabot',
		title: 'Alphabot',
		description: `A Discord bot made to help manage and moderate Discord servers.<br>The project was discontinued due to lack of resources and low demand. The bot features moderation, utility and fun commands.`,
		status: {
			title: 'Discontinued',
			color: 'red'
		},
		availableAt: [
			{
				logo: 'github',
				url: 'https://github.com/AlphaseStudios/Alphabot',
				alt: 'Source Code (Github)'
			}
		],
		madeWith: [
			{ img: 'ts', alt: 'TypeScript' },
			{ img: 'nodejs', alt: 'NodeJS' },
			{ img: 'firebase', alt: 'Firebase' }
		]
	},
	{
		img: 'dbugger',
		title: 'D-Bugger',
		description: `a Bug-tracker made for developers and teams to log, track and manage bugs, tasks, etc.
			Made with Svelte and deployed on Google Cloud.<br />
			The project was discontinued due to lack of funding and the low demand for it.`,
		status: {
			title: 'Discontinued',
			color: 'red'
		},
		availableAt: [
			{
				logo: 'github',
				url: 'https://github.com/EliasVal/D-Bugger',
				alt: 'Source Code (Github)'
			}
		],
		madeWith: [
			{ img: 'svelte', alt: 'Svelte' },
			{ img: 'ts', alt: 'TypeScript' },
			{ img: 'firebase', alt: 'Firebase' },
			{ img: 'tailwind', alt: 'Tailwind CSS' }
		]
	},
	{
		img: 'DFTH',
		title: "Don't Feed the Hole",
		description: `A 2D Hypercasual game built during a game-jam competition.
		You play as a character defending their home planet by blocking space debris from feeding a massive black hole.`,
		status: {
			title: 'Completed',
			color: 'limegreen'
		},
		availableAt: [
			{
				logo: 'web',
				url: 'https://eliasv.itch.io/dont-feed-the-hole',
				alt: 'Play (itch.io)'
			},
			{
				logo: 'download',
				url: 'https://eliasv.itch.io/dont-feed-the-hole',
				alt: 'Download'
			}
		],
		madeWith: [
			{ img: 'cs', alt: 'C#' },
			{ img: 'unity', alt: 'Unity Engine' }
		]
	}
];
