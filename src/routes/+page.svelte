<script>
	import logo from '$lib/images/mc.png';
</script>

<section>
	<img src={logo} alt="logo" width="150px" />
	<h1>Minecraft Server Finder</h1>
	<h3>Log in to start browsing!</h3>

	<div class="inputs">
		<input type="text" name="username" id="username" placeholder="Username" />
		<input type="password" name="password" id="password" placeholder="Password" />
		<a href="/forgot">
			forgot password?
		</a>
		<a href="/servers">
			<button>Login</button>
		</a>
		<a href="/forgot">
			don't have an account? create one now!
		</a>
	</div>
</section>

<style scoped lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: black;
	}

	a {
		color: black;
	}

	h1 {
		font-size: 60px;
		font-weight: 100;
	}

	h3 {
		font-size: 25px;
		font-weight: 100;
	}

	.inputs {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 50px;

		input {
			padding: 10px;
			margin-bottom: 10px;
			width: 200px;
			height: 20px;
			border-radius: 5px;
			border: black solid 1px;
		}

		button {
			margin-top: 30px;
			width: 140px;
			height: 40px;
			cursor: pointer;
		}
	}
</style>
