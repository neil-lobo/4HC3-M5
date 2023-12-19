<script>
	import logo from '$lib/images/mc.png';

	export let data;
</script>

<div id="app">
	<div id="sidebar">
		<img class="logo" src={logo} alt="logo" width="50%" />
		<a class={'button' + (data.route === '/(app)/servers' ? ' selected' : '')} href="/servers">
			<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720Zm0 400q-25 0-42.5 17.5T240-260q0 25 17.5 42.5T300-200q25 0 42.5-17.5T360-260q0-25-17.5-42.5T300-320ZM160-840h640q17 0 28.5 11.5T840-800v280q0 17-11.5 28.5T800-480H160q-17 0-28.5-11.5T120-520v-280q0-17 11.5-28.5T160-840Zm40 80v200h560v-200H200Zm-40 320h640q17 0 28.5 11.5T840-400v280q0 17-11.5 28.5T800-80H160q-17 0-28.5-11.5T120-120v-280q0-17 11.5-28.5T160-440Zm40 80v200h560v-200H200Zm0-400v200-200Zm0 400v200-200Z"/></svg>
			Servers
		</a>
		<a
		class={'button' + (data.route === '/(app)/communities' ? ' selected' : '')}
		href="/communities"
		>
			<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-240q-17 0-28.5-11.5T240-280v-80h520v-360h80q17 0 28.5 11.5T880-680v600L720-240H280ZM80-280v-560q0-17 11.5-28.5T120-880h520q17 0 28.5 11.5T680-840v360q0 17-11.5 28.5T640-440H240L80-280Zm520-240v-280H160v280h440Zm-440 0v-280 280Z"/></svg>
			Communities
		</a>
		<a class={'button' + (data.route === '/(app)/friends' ? ' selected' : '')} href="/friends">
			<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
			Friends
		</a>
		<a href="/" style="color: black">My Profile</a>
		<a href="/" style="color: black">Logout</a>
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

	.icon {
		fill: "red";
	}

	.logo {
		margin-bottom: 100px;
	}

	.button {
		text-decoration: none;
		// unset: all;
		color: white;
		background-color: #365cbb;
		width: 80%;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 7px;
		margin-top: 10px;
		margin-bottom: 10px;
		transition-duration: 0.2s;

		svg {
			fill: white;
			margin-right: 5px;
		}

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
			background-color: #e9ae1c;
			color: black;

			svg {
				fill: black
			}
		}
	}
</style>
