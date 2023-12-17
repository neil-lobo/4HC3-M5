<script lang="ts">
	import Filter from '$lib/components/Filter.svelte';
	import Searchbar from '$lib/components/Searchbar.svelte';
	import Server from '$lib/components/Server.svelte';

	export let data;
	let searchbar: string = '';
	let filter: string = '';

	$: filteredCommunities = data.communities
		.filter((communitiy) => {
			return communitiy.name.toLowerCase().startsWith(searchbar.trim().toLowerCase());
		})
		.filter((communitiy) => {
			if (filter == '') return true;
			return communitiy.tags.includes(filter);
		});
</script>

<section>
	<h1>Communities</h1>
	<div style="text-align:center;">
	<h3>Communities allow you to explore servers that popular streamers and content creators <br> are playing on, have played on, or recommended! <br> Have fun exploring these servers that your favourite creators know about <br> and meet others who may also know the creators you follow!</h3>
	</div>
	<div class="filters">
		<Searchbar bind:value={searchbar} />
		<div style="margin-left: 10px;">
			<Filter bind:selected={filter} />
		</div>
	</div>
	<div class="communities">
		{#each filteredCommunities as community}
			<Server serverData={community} />
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

	.communities {
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: scroll;
		padding-right: 10px;
		width: 70%;
	}
</style>
