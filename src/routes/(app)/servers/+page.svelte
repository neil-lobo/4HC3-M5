<script lang="ts">
	import Searchbar from "$lib/components/Searchbar.svelte";
    import Server from "$lib/components/Server.svelte";

    export let data;
    let searchbar: string = "";

    $: filteredServers = data.servers.filter(server => server.name.toLowerCase().startsWith(searchbar.trim().toLowerCase()));
</script>

<section>
    <h1>Servers</h1>
    <div class="filters">
        <Searchbar bind:value={searchbar} />
    </div>
    <div class="servers">
        {#each filteredServers as server}
            <Server serverData={server}/>
            <br>
        {/each}
    </div>
</section>

<style scoped lang="scss">
section {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-top: 50px;
    }
}

.filters {
    width: 90%;
    margin: 30px;
    display: flex;
    justify-content: flex-end;
}

.servers {
    overflow-y: scroll;
    padding-right: 10px;
    width: 70%;
}
</style>