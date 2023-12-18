<script lang="ts">
	import Server from '$lib/components/Server.svelte';
    import data from '$lib/data.json';

	// export let data;
	let searchbar: string = '';
	let filter: string = '';

	$: filteredServers = data.servers
		.filter((server) => {
			return server.name.toLowerCase().startsWith(searchbar.trim().toLowerCase());
		})
		.filter((server) => {
			if (filter == '') return true;
			return server.tags.includes(filter);
		});
</script>

<section>
	<h1>Servers</h1>
	<div class="servers">
		{#each filteredServers as server, i}
			<Server serverData={server} id={i} />
			<br />
		{/each}
	</div>
</section>

<style scoped lang="scss">
	section {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			margin-top: 50px;
		}
	}

	.filters {
		width: 90%;
		margin: 30px;
		display: flex;
		justify-content: flex-end;
	}

	.servers {
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: scroll;
		padding-right: 10px;
		width: 70%;
	}
</style>
