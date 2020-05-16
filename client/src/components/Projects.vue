<template>
<div class="project-container">
    <div v-for="project in projects" :key="project._id">
        <Project :project="project"></Project>
    </div>
</div>
</template>

<script>
import Project from "./ProjectCard"
    
    export default {
        name: "Projects",
        components: {
            Project,
        },
        props: [
            "projects"
        ]
    }
</script>

<style lang="scss" scoped>
    .project-container {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
        
        
        div {
            // margin-right: 25px;
            margin: 15px;
        }
    }
</style>