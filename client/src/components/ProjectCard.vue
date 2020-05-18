<template>
    <div class="project-card">
        <!-- <div class="img-container">
            <img :src="project.image" alt="Project Image">
        </div> -->
        <div class="card-info">
            <router-link class="project-page-link" :to="{ name: 'project', params: { id: project._id } }">{{ project.title }}</router-link>
            <p class="project-deadline"><span>Deadline: </span>{{ project.deadline }}</p>
            <div class="link-container">
                <a :href="project.link" target="_blank">GitHub Link</a>
            </div>
            <div class="delete-container">
                <p class="delete-link" @click="deleteProject(project.title, project._id)">delete</p>
            </div>
        </div>
        <DeleteModal />
    </div>
</template>

<script>
import ProjectService from "../ProjectService";
import DeleteModal from "./DeleteModal";

    export default {
        name: "Project",
        props: [
            "project",
            "id"
        ],
        components: {
            DeleteModal,
        },
        data() {
            return {
            // projects: [],
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
            async deleteProject(title, id){
            // newProject = new Project();
            if(confirm("Delete project: " + title + "?")){
                await ProjectService.deleteProject(id);
                this.projects = await ProjectService.getProjects();
                console.log("deleted document titled: "+ title + " " + id);
                this.$router.go();
            }
            
            // console.log("deleted document with id: " + id);
            },
            deletePrompt(){
                document.getElementById("delete-modal").style.display = "block";
            }
        },
    }
</script>

<style lang="scss" scoped>
    .project-card {
        // width: 200px;
        // height: 200px;
        background-color: rgba(255, 255, 255, 1);
        margin-top: 50px;
        // margin-right: 50px;
        border: 2px solid rgba(255, 255, 255, 1);
        border-radius: 3px;
        flex: 1 0 21%;
        
        .project-page-link {
            margin-bottom: 15px;
            color: purple;
            font-size: 1.25em;
            text-decoration: none;
            transition: 0.2s ease-in-out;

            &:hover {
                color: lightskyblue;
                transition: 0.2s ease-in-out;
            }
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
        .delete-container {
            margin-top: 25px;

            .delete-link {
                color: purple;
                border: 1px solid rgba(0, 0, 0, 0.0);
                transition: 0.3s ease-in-out;

                &:hover {
                    border: 1px solid purple;
                    cursor: pointer;
                    transition: 0.3s ease-in-out;
                }
            }
        }
        
    }
    #delete-modal {
        display: none;
    }
</style>