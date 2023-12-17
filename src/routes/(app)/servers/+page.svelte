<script>
	import Server from "$lib/components/Server.svelte";

    export let data;
</script>

<section>
    <div class="servers">
        {#each data.servers as server}
            <Server serverData={server}></Server>
            <br>
        {/each}
    </div>
</section>

<style scoped>
section {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.servers {
    overflow-y: scroll;
    padding-right: 10px;
    width: 70%;
}
</style>