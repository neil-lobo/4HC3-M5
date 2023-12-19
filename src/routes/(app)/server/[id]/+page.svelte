<script>
	import person from '$lib/icons/person.svg';

	export let data;
	let buttonText = 'Add Server +';

	function copy() {
		buttonText = 'IP copied to clipboard!';

		setTimeout(() => {
			buttonText = 'Add Server +';
		}, 5000);
	}
</script>

<section>
	<div class="server-container">
		{#if !data.error}
			<div class="logo-container">
				<img src={data.server?.logo} alt="logo" width="300px" />
				<div class="player-count">
					<img src={person} alt="users" />
					{data.server?.playerCount}
				</div>
				<button on:click={copy}>{buttonText}</button>
			</div>
			<div class="server-info">
				<h1>{data.server?.name}</h1>
				<p>{data.server?.description}</p>
			</div>
		{:else}
			<div class="error">
				<h1>Error!</h1>
				{data.message}
			</div>
		{/if}
	</div>
</section>

<style scoped lang="scss">
	section {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: black;
	}

	.error {
		display: flex;
		flex-direction: column;
	}

	h1 {
		font-size: 60px;
		font-weight: 100;
	}

	.player-count {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.server-container {
		// border: red solid 1px;
		width: 70%;
		display: flex;
		flex-direction: row;

		.logo-container {
			display: flex;
			flex-direction: column;
			align-items: center;

			button {
				border: none;
				color: black;
				background-color: #e9ae1c;
				font-size: 15px;
				width: 80%;
				height: 50px;
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

		.server-info {
			margin: 80px;
		}
	}
</style>
