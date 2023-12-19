<script>
	import logo from '$lib/images/mc.png';

	export let data;
</script>

<div id="app">
	<div id="sidebar">
		<img class="logo" src={logo} alt="logo" width="50%" />
		<a class={'button' + (data.route === '/(app)/servers' ? ' selected' : '')} href="/servers">
			Servers
		</a>
		<a
			class={'button' + (data.route === '/(app)/communities' ? ' selected' : '')}
			href="/communities"
		>
			Communities
		</a>
		<a class={'button' + (data.route === '/(app)/friends' ? ' selected' : '')} href="/friends">
			Friends
		</a>
		<a href="/" style="color: white">Logout</a>
	</div>
	<slot />
</div>

<style scoped lang="scss">
	#app {
		display: flex;
		flex-direction: row;
	}

	#sidebar {
		position: fixed;
		height: 100vh;
		width: 15vw;
		/* border: red solid 1px; */
		background-color: #4d71cc;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.logo {
		margin-bottom: 100px;
	}

	.button {
		text-decoration: none;
		// unset: all;
		color: white;
		background-color: #405da7;
		width: 80%;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 7px;
		margin-top: 10px;
		margin-bottom: 10px;
		transition-duration: 0.2s;

		&:visited {
			text-decoration: none;
		}

		&:hover {
			filter: brightness(1.03);
			transform: translateY(-3px);
			transition-duration: 0.4s;
			cursor: pointer;
		}

		&.selected {
			background-color: #dba83a;
			color: black;
		}
	}
</style>
