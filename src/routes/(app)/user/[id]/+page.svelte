<script>
	import Server from '$lib/components/Server.svelte';

	export let data;

	let allServers =
		data.user?.servers.all.map((serverId) => {
			return ({
					data: data.servers?.[serverId] ?? {
						name: 'error',
						logo: 'error',
						description: 'error',
						playerCount: 'error',
						tags: []
					},
					id: serverId
				}
			);
		}) ?? [];

	let mutualServers =
		data.user?.servers.mutual.map((serverId) => {
			return ({
					data: data.servers?.[serverId] ?? {
						name: 'error',
						logo: 'error',
						description: 'error',
						playerCount: 'error',
						tags: []
					},
					id: serverId
				}
			);
		}) ?? [];
</script>

<section>
	{#if !data.error}
		<h1>{data.user?.username}</h1>
		<div class="status">
			Status:
			{#if data.user?.status === 'online'}
				<span class="online">Online</span>
			{:else}
				<span class="offline">Offline</span>
			{/if}
		</div>
		<div class="about-container">
			<h3>About me:</h3>
			<br />
			{data.user?.about}
		</div>
		<div class="current-server-container">
			{#if data.user?.status == 'online'}
				<h3>Currently playing on:</h3>
				<br />
				{#if data.servers?.[data.user?.servers.current ?? 0]}
					<Server serverData={data.servers?.[data.user?.servers.current ?? 0]} id={data.user?.servers.current} />
				{/if}
			{/if}
		</div>
		<div class="mutual-servers-continer">
			<h3>Mutual servers:</h3>
			<br>
			{#each mutualServers as server}
				<Server serverData={server.data} id={server.id} />
				<br />
			{/each}
		</div>
		<div class="all-servers-continer">
			<h3>Liked servers:</h3>
			<br />
			{#each allServers as server}
				<Server serverData={server.data} id={server.id}/>
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

		.status {
			.online {
				font-weight: bold;
				color: rgb(30, 212, 30);;
			}

			.offline {
				font-weight: bold;
				color: red;
			}
		}

		.about-container {
			margin-top: 50px;
			width: 70%;
		}

		.current-server-container {
			margin-top: 50px;
			width: 70%;
		}

		.all-servers-continer {
			margin-top: 50px;
			width: 70%;
		}

		.mutual-servers-continer {
			margin-top: 50px;
			width: 70%;
		}
	}

	.error {
		display: flex;
		flex-direction: column;
	}
</style>
