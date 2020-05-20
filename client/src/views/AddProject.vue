<template>
    <div class="add-project">
        <div class="nav">
            <router-link to="/" id="go-back">&lsaquo; Go Back</router-link>
        </div>
        <h1>Add A Project</h1>
            <input type="text" name="project-title" id="project-title" v-model="title" placeholder="Project title">
            <input type="text" name="project-link" id="project-link" v-model="link" placeholder="Github link">
            <div class="github-deadline-container">
                
                <div class="project-flex-container">
                    <label for="project-deadline">Project Deadline</label>    
                    <input type="date" name="project-deadline" id="project-deadline" v-model="deadline">
                </div>
                <!-- <div class="project-flex-container">
                    <label for="project-deadline">Project Image</label>    
                    <input type="file" name="project-image" id="project-image">
                </div> -->

            </div>
            <input type="submit" value="Add Project" id="project-submit" @click="addProject">
    </div>
</template>

<script>
import ProjectService from '../ProjectService'

    export default {
    props: {
    
    },
    data() {
        return {
        projects: [],
        error: '',
        title: '',
        deadline: '',
        link: '',
        }
    }, 
    methods: {
        async addProject(){
            // newProject = new Project();
            await ProjectService.insertProject(this.title, this.link, this.deadline);
            // this.projects = await ProjectService.getProjects();
            this.$router.push({path: '/'});
        },
    },
    }
    
</script>

<style lang="scss" scoped>
    h1 {
        margin-top: 50px;
    }
    
    // input boxes
    input {
        display: block;
        padding: 10px;
        width: 50%;
        max-width: 500px;
        margin: 0 auto;
        margin-top: 25px;
        border: 1px solid #ccc;
        border-radius: 3px;

        &:first-child {
            margin-top: 0;
        }
    }
    input[type="file"] {
        border: none;
    }
    .github-deadline-container {
        display: flex;
        justify-content: space-evenly;
        width: 50%;
        max-width: 500px;
        // padding: ;
        // padding: 0 10px;
        margin: 0 auto;
        margin-top: 25px;

        #project-link {
            width: 50%;
            // margin-top: 25px;
            margin-right: 25px;
        }
        
    }
    .project-flex-container {
        width: 50%;
        max-width: 500px;
        margin: 0 auto;
        // display: flex;
        // justify-content: space-evenly;
        align-items: center;
        // margin-top: 25px;

        label {
        // margin-top: 25px;
        // display: inline-block;
        margin-right: 10px;
        width: 25%;
        }
        input {
            margin-top: 10px;
            display: inline-block;
            width: 100%;
        }
        &:nth-child(2) {
            border-right: 1px solid rgb(211, 211, 211);
            margin-right: 15px;
            padding-right: 25px;
        }
    }
    #project-submit {
        background-color: purple;
        border: 1px solid purple;
        color: white;
        transition: 0.3s ease-in-out;

        &:hover {
            background-color: #fff;
            color:  purple;
            cursor: pointer;
        }
    }
    .add-project {
        padding: 50px 0;
    }
    .nav {
        // margin-top: 50px;

        #go-back {
            color: purple;
            text-decoration: none;
            padding: 10px;
            border: 1px solid purple;
            border-radius: 3px;
            transition: 0.3s ease-in-out;

            &:hover {
                background-color: purple;
                color: white;
                transition: 0.3s ease-in-out;
            }
        }
    }
</style>