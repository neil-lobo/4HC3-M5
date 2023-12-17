<script lang="ts">
	import Searchbar from "$lib/components/Searchbar.svelte";
    import Server from "$lib/components/Server.svelte";

    export let data;
    let searchbar: string = "";

    $: filteredCommunities = data.communities.filter(communitiy => communitiy.name.toLowerCase().startsWith(searchbar.trim().toLowerCase()));
</script>

<section>
    <h1>Communities</h1>
    <div class="filters">
        <Searchbar bind:value={searchbar} />
    </div>
    <div class="communities">
        {#each filteredCommunities as community}
            <Server serverData={community}/>
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

.communities {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    padding-right: 10px;
    width: 70%;
}
</style>