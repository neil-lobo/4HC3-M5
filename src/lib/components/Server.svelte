<script lang="ts">
	// import addIcon from '$lib/icons/add.svg';
	import person from '$lib/icons/person.svg';
	import Tag from '$lib/components/Tag.svelte';

	let buttonText = 'Add Server +';

		function copy() {
			buttonText = 'IP copied to clipboard!';

			setTimeout(() => {
				buttonText = 'Add Server +';
			}, 5000);
		}

	export let serverData: {
		name: string;
		logo: string;
		description: string;
		playerCount: string;
		tags: string[];
	};

	export let id: number;
	export let community: boolean = false;
</script>

<section>
	<a href={`/${community ? "community" : "server"}/${id}`}>
		<img id="logo" src={serverData.logo} alt="logo" width="160px" />
	</a>
	<div class="info-container">
		<a href={`/${community ? "community" : "server"}/${id}`}>
			<h1>{serverData.name}</h1>
		</a>
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
	<div class="add-container">
	{#if !community}
		<button on:click={copy}>{buttonText}</button>
		<!-- <img id="add" src={addIcon} alt="add" width="120px" /> -->
	{/if}
	</div>
</section>

<style scoped lang="scss">
	h1 {
		font-size: 60px;
		font-weight: 100;
		color: white;
	}

	section {
		max-width: 1000px;
		width: 90%;
		background-color: #365cbb;
		color: white;
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

			a {
				text-decoration: none;
				color: black;
			}

			a:visited {
				color: black;
			}

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

		.add-container{
			margin-right: 5px;

			button {
				border: none;
				color: black;
				background-color: #e9ae1c;
				font-size: 15px;
				width: 100%;
				height: 80px;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 7px;
				margin-top: 10px;
				margin-bottom: 10px;
				transition-duration: 0.2s;

				&:hover {
					filter: brightness(1.03);
					transform: translateY(-3px);
					transition-duration: 0.4s;
					cursor: pointer;
				}
			}
		}

		// #add {
		// 	height: 100%;
		// 	align-self: flex-start;
		// 	cursor: pointer;
		// 	transition-duration: 0.1s;

		// 	&:hover {
		// 		transform: translateY(-3px);
		// 		transition-duration: 0.2s;
		// 	}
		// }
	}
</style>
