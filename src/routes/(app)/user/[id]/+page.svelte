<script>
	import Server from "$lib/components/Server.svelte";

    export let data;

    let allServers = data.user?.servers.all.map(serverId => {
        return data.servers?.[serverId] ?? {
            name: "error",
            logo: "error",
            description: "error",
            playerCount: "error",
            tags: []
        }
    }) ?? []

    let mutualServers = data.user?.servers.mutual.map(serverId => {
        return data.servers?.[serverId] ?? {
            name: "error",
            logo: "error",
            description: "error",
            playerCount: "error",
            tags: []
        }
    }) ?? []
</script>


<section>
    {#if !data.error}
        <h1>{data.user?.username}</h1>
        <div class="status">
            Status:
            {#if data.user?.status === "online"}
                <span class="online">Online</span>
            {:else}
                <span class="offline">Offline</span>
            {/if}
        </div>
        <div class="about-container">
            <h3>About me:</h3>
            <br>
            {data.user?.about}
        </div>
        <div class="current-server-container">
            <h3>Currently playing on:</h3>
            <br>
            {#if data.servers?.[data.user?.servers.current ?? 0]}
                <Server serverData={data.servers?.[data.user?.servers.current ?? 0]}/>
            {/if}
        </div>
        <div class="all-servers-continer">
            <h3>Liked servers:</h3>
            <br>
            {#each allServers as server}
                <Server serverData={server}/>
                <br>
            {/each}
        </div>
        <div class="mutual-servers-continer">
            <h3>Mutual servers:</h3>
            {#each mutualServers as server}
                <Server serverData={server}/>
                <br>
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

    .status {
        .online {
            font-weight: bold;
            color: green;
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