<ul class="techstack">
	<li>
		<h3>Frontend</h3>
		<ul class="frontend">
			<li>TypeScript</li>
			<li>React / Next.js</li>
			<li>Angular</li>
			<li>Svelte</li>
			<li>TailwindCSS</li>
			<li>Material UI</li>
			<li>SCSS</li>
			<li>Unity Engine</li>
			<li>RxJS</li>
		</ul>
	</li>
	<li>
		<h3>Backend</h3>
		<ul class="backend">
			<li>C# / .NET Core</li>
			<li>Express.js / NestJS</li>
			<li>Node.js</li>
			<li>MongoDB</li>
			<li>Firebase</li>
			<li>Postman</li>
		</ul>
	</li>
	<li>
		<h3>DevOps & Tools</h3>
		<ul class="devops">
			<li>Docker</li>
			<li>Linux</li>
			<li>Git</li>
			<li>CI/CD (GitHub, GitLab, Azure)</li>
			<li>Google Cloud Platform</li>
			<li>Openshift</li>
			<li>Playwright / Jest</li>
			<li>Nx</li>
			<li>Webpack / Rollup</li>
		</ul>
	</li>
</ul>

<style lang="scss">
	.techstack {
		display: flex;
		flex-direction: column;
		gap: 0.4em;
		list-style: none;

		ul {
			list-style: none;
			display: flex;
			flex-wrap: wrap;
			gap: 0.3ch;

			li {
				padding: 0.2em 0.3em;
				border-radius: 3px;
			}

			&.frontend li {
				background-color: #a2102e;
			}

			&.backend li {
				background-color: blueviolet;
			}

			&.devops li {
				background-color: #8b4513;
			}
		}
	}
</style>
