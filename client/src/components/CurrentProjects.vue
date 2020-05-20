<template>
    <div class="current-projects">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 302"><path class="cls-1" d="M-.08,121.16s284.55-23.9,676.93,130c155.18,60.88,328,58.35,481.78-6.21,224.79-94.37,367.19-189.74,760.51-38.37l-14.37,182.43L-9.3,238.22Z"/><path class="cls-2" d="M1,153.29s283.58-33.42,680.91,107.27c157.13,55.64,329.78,47.32,481.3-22.36,221.49-101.85,360.62-201.94,758.8-63.85l-8.26,182.82-1918-86.58Z"/><path class="cls-3" d="M0,185.58S281.78,139.4,685.05,262c159.48,48.5,331.58,32.4,479.8-44C1381.53,106.26,1516,0,1920,120V303H0Z"/><path class="cls-1" d="M5.6,239.31s279.47-58.58,687.76,46.11c161.47,41.41,332.69,17.71,477.39-65.2C1382.28,99,1511.92-13.08,1920.83,89l8.08,182.82L10.79,356.62Z"/><path class="cls-2" d="M10.56,271.07s277.35-67.92,688.92,23c162.76,36,333.09,6.55,474.93-81.17C1381.76,84.7,1507.57-31.68,1919.67,56.58L1933.88,239,19.68,388.14Z"/></svg>
        <div class="project-section">
            <h2>Current Projects</h2>
            <p>A list of all current projects are listed below:</p>
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
    .cls-1 {
        opacity: 0.25;
    }
    .cls-2 {
        opacity: 0.5;
    }
    .project-section {
        background-color: purple;
        padding: 50px 0;
        
        
        h2 {
        font-size: 2em;
        color: white;
        margin-bottom: 25px;
        }
        p {
            margin-bottom: 50px;
            color: white;
        }
    }
</style>