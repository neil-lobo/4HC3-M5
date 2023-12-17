<script lang="ts">
    import filter from "$lib/icons/filter.svg"
    import data from "$lib/data.json"
    export let selected: string = "";
</script>

<section>
    <img src={filter} alt="search" width="30px">
    Filter
    <select name="tags" id="select-tags" bind:value={selected}>
        <option value=""></option>
        {#each data.searchTags as tag}
            <option value={tag}>{tag}</option>
        {/each}
    </select>
</section>

<style scoped lang="scss">
    section {
        padding: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border: black solid 2px;
        border-radius: 7px;
        font-size: 15px;
        
        select {
            outline: none;
            border: none;
        }  
    }
    </style>