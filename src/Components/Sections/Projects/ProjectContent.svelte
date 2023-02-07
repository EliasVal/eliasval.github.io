<script lang="ts">
	export let project: Project;
</script>

<div class="project-content">
	<div class="project-image">
		<img src="/images/{project.img}.jpg" alt={project.title} />
	</div>
	<div class="project-details">
		<h1>{project.title}</h1>
	</div>
</div>

<style lang="scss">
	.project-content {
		display: flex;
	}
</style>
