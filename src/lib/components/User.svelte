<script lang="ts">
	import addIcon from '$lib/icons/add.svg';
	import person from '$lib/icons/person.svg';
	import Tag from '$lib/components/Tag.svelte';

	export let userData: {
		username: string;
		pfp: string;
		status: 'online' | 'offline';
		servers: {
			current: number;
			all: number[];
			mutual: number[];
		};
	};
</script>

<section>
	<img id="logo" src={serverData.logo} alt="logo" width="160px" />
	<div class="info-container">
		<h1>{serverData.name}</h1>
		<br />
		<div class="player-count">
			<img src={person} alt="users" />
			{serverData.playerCount}
		</div>
		<br />
		<div class="tags">
			{#each serverData.tags as tag}
				<Tag text={tag} />
			{/each}
		</div>
	</div>
	<!-- <div class="add-container"> -->
	<img id="add" src={addIcon} alt="add" width="40px" />
	<!-- </div> -->
</section>

<style scoped lang="scss">
	h1 {
		font-size: 60px;
		font-weight: 100;
	}

	section {
		max-width: 1000px;
		width: 90%;
		background-color: #d9d9d9;
		padding: 30px;
		border-radius: 8px;
		display: flex;
		flex-direction: row;
		align-items: center;

		#logo {
			margin: 20px;
		}

		.info-container {
			margin-left: 50px;
			flex: 1;

			.player-count {
				display: flex;
				flex-direction: row;
				align-items: center;
			}

			.tags {
				display: flex;
				flex-wrap: wrap;
			}
		}

		#add {
			height: 100%;
			align-self: flex-start;
			cursor: pointer;
			transition-duration: 0.1s;

			&:hover {
				transform: translateY(-3px);
				transition-duration: 0.2s;
			}
		}
	}
</style>
