<template>
    <div class="project-card">
        <!-- <div class="img-container">
            <img :src="project.image" alt="Project Image">
        </div> -->
        <div class="card-info">
            <h3>{{ project.title }}</h3>
            <p class="project-deadline"><span>Deadline: </span>{{ project.deadline }}</p>
            <div class="link-container">
                <a :href="project.link" target="_blank">GitHub Link</a>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectService from "../ProjectService";

    export default {
        name: "Project",
        props: [
            "project"
        ],
        components: {

        },
        data() {
            return {
            projects: [],
            error: '',
            title: '',
            deadline: '',
            link: '',
            image: '',
            }
        },
        async created() {
            try { 
                this.projects = await ProjectService.getProjects();
            } catch(err) {
                this.error = err.message;
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" scoped>
    .project-card {
        // width: 200px;
        // height: 200px;
        background-color: rgba(0, 0, 0, 0.06);
        margin-top: 50px;
        border: 2px solid rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        
        h3 {
            margin-bottom: 15px;
            color: purple;
        }
        .project-deadline {
            color: purple;
        }
        span {
            color: black;
        }
        .card-info {
            padding: 15px 35px;
        }
        .img-container {
            width: 200px;
            height: 100px;
            // object-fit: cover;
            // overflow: hidden;
            // margin-bottom: 50px;
            // object-fit: contain;
            margin-bottom: 25px;
            
            img {
                max-width: 100%;
                // object-fit: contain;
                // max-height: 100%;                
                ;
            }
        }
        .link-container {
            margin-top: 75px;
            margin-bottom: 15px;

            a {
                color: white;
                background-color: purple;
                text-decoration: none;
                padding: 10px;
                border: 1px solid purple;
                border-radius: 3px;
                // margin-bottom: 25px;
                transition: 0.3s ease-in-out;

                &:hover {
                    background-color: white;
                    color: purple;
                    transition: 0.3s ease-in-out;
                }  
            }
        }
    }
</style>