<script lang="ts">
	import search from '$lib/icons/search.svg';
	export let value: string;

	// $: {
	//     console.log(value);
	// }

	export let addfriend: boolean = false;
</script>

<section>
	{#if !addfriend}
		<img src={search} alt="search" width="30px" />
		<input type="text" placeholder="Search" bind:value />
	{/if}
</section>

<style scoped lang="scss">
	section {
		// padding: 5px;
		display: flex;
		flex-direction: row;
		align-items: center;
		border: black solid 2px;
		border-radius: 7px;
		width: 300px;
		
		img {
			margin: 6px;
		}
		
		input {
			color: black;
			font-size: 15px;
			border: none;
			background: none;
			outline: none;
			width: 80%;

			&::placeholder {
				color: black;
			}
		}
	}
</style>
