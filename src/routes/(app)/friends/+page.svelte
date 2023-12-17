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
		{#each filteredFriends as friend, i}
			<div class="friend">
				<h1>{friend.username}</h1>
				{#if friend.status === "online"}
					<span class="online status">Online</span>
				{:else}
					<span class="offline status">Offline</span>
				{/if}
				<a href={`/user/${i}`}>View Profile</a>
			</div>
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
		padding-right: 10px;
		width: 60%;
		
		
		.friend {
			display: flex;
			flex-direction: row;
			align-items: center;
			background-color: #d9d9d9;
			border-radius: 7px;
			padding: 30px;

			h1 {
				margin: 0;
				margin-right: 130px;
				
			}
			
			.status {
				margin-right: 30px;
			}

			.online {
				font-weight: bold;
				color: green;
			}
        
			.offline {
				font-weight: bold;
				color: red;
			}
		}
	}
</style>
