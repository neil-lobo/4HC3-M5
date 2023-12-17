<script lang="ts">
    import search from "$lib/icons/search.svg"
    export let value: string;

    // $: {
    //     console.log(value);
    // }
</script>

<section>
    <img src={search} alt="search" width="30px">
    <input type="text" placeholder="Search" bind:value={value}>
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
        font-size: 15px;
        border: none;
        background: none;
        outline: none;
        width: 80%;
    }
    
}
</style>