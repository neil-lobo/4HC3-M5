<script>
    let username = '';
</script>

<a href="/friends">
    <button>back</button>
</a>

<section>
    <h3>Add a friend</h3>
    <div class="inputs">
        <input bind:value={username} placeholder="Friends Username" />
        <button>+ add friend</button>
    </div>
</section>

<style scoped lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
