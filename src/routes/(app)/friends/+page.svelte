<script lang="ts">
	import Searchbar from '$lib/components/Searchbar.svelte';
	import data from '$lib/data.json';

	let searchbar: string = '';

	$: filteredFriends = data.friends.map(friendId => {
        return data.users[friendId]
    }).filter(friend => {
        return friend.username.toLowerCase().startsWith(searchbar.trim().toLowerCase());
    })
</script>

<section>
	<h1>Friends</h1>
	<div class="filters">
		<Searchbar bind:value={searchbar} />
	</div>
	<div class="friends">
		{#each filteredFriends as friend}
			<!-- <Server serverData={server} /> -->
            {JSON.stringify(friend)}
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

	.friends {
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: scroll;
		padding-right: 10px;
		width: 70%;
	}
</style>
