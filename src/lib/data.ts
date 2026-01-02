export const projects: Project[] = [
	{
		img: 'WebBody',
		title: 'Portfolio',
		description:
			'The website you\'re currently visiting!<br>Originally made with React, but now the portfolio was remade (twice) with Svelte!<br>Old versions also included in the "Available at" section below.',
		status: {
			title: 'Maintained',
			color: 'royalblue'
		},
		availableAt: [
			{
				logo: 'github',
				url: 'https://github.com/EliasVal/eliasval.github.io',
				alt: 'Source Code (Github)'
			},
			{
				logo: 'web',
				url: 'https://eliasval.github.io',
				alt: "Current Design (You're here!)"
			},
			{
				logo: 'web',
				url: 'https://eliasval.github.io/old-svelte/index.html',
				alt: 'Old Svelte Design'
			},
			{
				logo: 'web',
				url: 'https://eliasval.github.io/old-react/index.html',
				alt: 'Old React Design'
			}
		],
		madeWith: [
			{ img: 'svelte', alt: 'Svelte' },
			{ img: 'ts', alt: 'TypeScript' },
			{ img: 'scss', alt: 'SCSS' }
		]
	},
	{
		img: 'chessed',
		title: 'Chessed',
		description: 'a Fully online chess app! complete with match history, match-finding and ELO!',
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
		description: 'A Discord bot made to send messages about new red alerts in Israel.',
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
		description:
			'a 2D Party-game to fool around with goofy weapons! development was discontinued due to lack of time.',
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
			'A Commissioned Discord bot that acts like a Cloud Storage medium! Complete with a fully navigatable file system!',
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
		description:
			"An all-purpose Discord bot that I used to work on.<br>The project was abandoned due to problems with finding a proper server to host the bot, and Discord's many controversial API changes (such as practically forcing slash commands).",
		status: {
			title: 'Deprecated',
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
		description:
			'A project made for developers to log & keep track of bugs.<br>The project was shut down due to lack of funding and the low demand for it.',
		status: {
			title: 'Deprecated',
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
		description: 'A 2D Hypercasual game I made with a group of friends for a game-jam competition!',
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
	},
	{
		img: 'WebBody',
		title: 'Discord Emoji Bot',
		description: 'A Discord bot made to "bypass" Discord\'s server limits on custom emojis!',
		status: {
			title: 'Completed',
			color: 'limegreen'
		},
		availableAt: [
			{
				logo: 'github',
				url: 'https://github.com/EliasVal/DiscordEmojiBot',
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
		img: 'spunch',
		title: 'Image to ASCII art Converter',
		description:
			'This applications converts images to ASCII art. Originally made with Electron and later remade with Windows Presentation Foundation (WPF) Forms.',
		status: {
			title: 'Completed',
			color: 'limegreen'
		},
		availableAt: [
			{
				logo: 'github',
				url: 'https://github.com/EliasVal/ITAConverter',
				alt: 'Source Code (Github)'
			},
			{
				logo: 'download',
				url: 'https://github.com/EliasVal/ITAConverter/releases/tag/v1.0-WPF',
				alt: 'Download'
			}
		],
		madeWith: [
			{ img: 'html', alt: 'HTML' },
			{ img: 'scss', alt: 'SCSS' },
			{ img: 'js', alt: 'JavaScript' },
			{ img: 'cs', alt: 'C#' },
			{ img: 'electron', alt: 'Electron' },
			{ img: 'wpf', alt: 'WPF Forms' }
		]
	},
	{
		img: 'WebBody',
		title: 'TCP Messaging App',
		description:
			'This project was just me fiddling around with networking, particularly the Transmission Control Protocol (TCP) in C#.',
		status: {
			title: 'Completed',
			color: 'limegreen'
		},
		availableAt: [
			{
				logo: 'github',
				url: 'https://github.com/EliasVal/TcpMessaging',
				alt: 'Source Code (Github)'
			}
		],
		madeWith: [{ img: 'cs', alt: 'C#' }]
	}
];
