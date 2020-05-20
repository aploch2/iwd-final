<template>
    <div id="nav">
        <router-link to="/add-project" id="add-project"><font-awesome-icon icon="plus" class="plus-icon" />New Project</router-link> 
    </div>
</template>

<script>
    export default {
        name: "Navbar",
    }
</script>

<style lang="scss" scoped>
    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: white;

            &.router-link-exact-active {
            color: #42b983;
            }
        }
    }
    #add-project {
        text-decoration: none;
        padding: 10px;
        background-color: purple;
        border: 1px solid purple;
        border-radius: 3px;
        color: white;
        // margin-bottom: 25px;
        transition: 0.3s ease-in-out;

        &:hover {
            background-color: rgba(white, 0);
            color: purple;
            transition: 0.3s ease-in-out;
        }
    }
    .plus-icon {
        margin-right: 5px;
        // font-size: ;
    }
</style>