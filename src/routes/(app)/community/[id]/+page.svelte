<script>
	import Server from '$lib/components/Server.svelte';

	export let data;

	let servers =
		data.community?.serverIds.map((serverId) => {
			return {
				data: data.servers?.[serverId] ?? {
					name: 'error',
					logo: 'error',
					description: 'error',
					playerCount: 'error',
					tags: []
				},
				id: serverId
			};
		}) ?? [];
</script>

<section>
	{#if !data.error}
		<h1>{data.community?.name}</h1>
		<div class="about-container">
			<h3>About:</h3>
			<br />
			{data.community?.description}
		</div>
		<div class="all-servers-continer">
			<h3>Liked servers:</h3>
			<br />
			{#each servers as server}
				<Server serverData={server.data} id={server.id} />
				<br />
			{/each}
		</div>
	{:else}
		<div class="error">
			<h1>Error!</h1>
			{data.message}
		</div>
	{/if}

</section>

<style scoped lang="scss">
	section {
		padding: 50px;
		width: 100%;
		// border: red solid;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: black;

		.about-container {
			margin-top: 50px;
			width: 70%;
		}

		.all-servers-continer {
			margin-top: 50px;
			width: 70%;
		}
	}

	.error {
		display: flex;
		flex-direction: column;
	}
</style>
