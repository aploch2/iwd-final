<template>
    <div id="delete-modal">
        <div class="black-bg"></div>
        <div class="delete-prompt">
            <h3>Delete?</h3>
            <div class="button-container">
                <button id="yes">Yes</button>
                <button id="no" @click="deleteProject(project._id)">No</button>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectService from "../ProjectService";

    export default {
        name: "DeleteModal",
        props: [
            "project",
            "id"
        ],
        async created() {
            try { 
                this.projects = await ProjectService.getProjects();
            } catch(err) {
                this.error = err.message;
            }
        },
        methods: {
            noButton(){
                console.log("closed");
                document.getElementById('delete-modal').style.display = "none";
            },
            async deleteProject(id){
                // newProject = new Project();
                // document.getElementById("delete-modal").style.display = "block";
                if(confirm("Delete project titled: " + id)){
                    console.log("deleted document with id: " + id);
                }
                // await ProjectService.deleteProject(id);
                // this.projects = await ProjectService.getProjects();
  
            },
        }
    }
</script>

<style lang="scss" scoped>
    body {
        position: relative;
    }
    .black-bg {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
    }
    .delete-prompt {
        background-color: white;
        // width: 50%;
        // max-width: 500px;
        border-radius: 3px;
        margin: 0 auto;
        padding: 25px;
        position: absolute;
        top: 50%;
        left: 50%;
        // right: 0;
        transform: translate(-50%, -50%);
        z-index: 11;

        .button-container {
            margin-top: 25px;

            button {
                margin-right: 25px;
                padding: 5px 20px;
                background-color: white;
                border: 1px solid purple;
                border-radius: 3px;
                color: purple;
                transition: 0.3s ease-in-out;

                &:nth-child(2) {
                    margin-right: 0;
                }
                &:hover {
                    color: white;
                    background-color: purple;
                    transition: 0.3s ease-in-out;
                }
            }
        }
    }
</style>