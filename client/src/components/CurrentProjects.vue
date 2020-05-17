<template>
    <div class="current-projects">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 302"><path class="cls-1" d="M-1,416s-1-70-1-113c269-152,370.52-133.28,644.45-71C757,258,928.63,237.5,1025,160.47,1222,3,1650.5-77,1921.5,103c0,57,0,227.5-.5,312Z"/></svg>

        <div class="project-section">
            <h2>Current Projects</h2>
            <Projects :projects="projects" />
        </div>    
    </div>
</template>

<script>
import ProjectService from "../ProjectService";
import Projects from "@/components/Projects.vue";

    export default {
        name: "CurrentProjects",
        components: {
            Projects,
        },
        data(){
            return {
                projects: [],
            }
        },
        async created() {
      try { 
        this.projects = await ProjectService.getProjects();
      } catch(err) {
        this.error = err.message;
      }
    },
    }
</script>

<style lang="scss" scoped>
    #Layer_1 {
        fill: purple;
        display: block;
    }
    .project-section {
        background-color: purple;
        padding: 50px 0;

        h2 {
        color: white;
        }
    }
</style>