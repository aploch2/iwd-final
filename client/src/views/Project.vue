<template>
    <div class="project-page">
        <div class="nav">
            <router-link to="/" id="go-back" >Go Back</router-link>
        </div>
        <h1>{{singleProject.title}}</h1>
        <h5><a :href="singleProject.link">Github Link</a></h5>
        <h3>{{singleProject.deadline}}</h3>
        <h3>Add New Todo</h3>
        <input type="text" v-model="todo" name="todo"> 
        <button @click="addTodo()">Add</button>
        <div class="todos" v-for="todo in singleProject.todos" :key="todo.todo">
            <p>{{todo.todo}}</p>
            <h6 v-if="todo.completed == false">False</h6>
            <h6 v-else>True</h6>
            
        </div>

    </div>
</template>

<script>
import ProjectService from "../ProjectService";

    export default {
        props: [
            'todo',
        ],
        data() {
            return {
                singleProject: [],
                projectTitle: '',
                projectLink: '',
                projectDeadline: '',
            }
        },
        async created() {
           try { 
                this.singleProject = await ProjectService.getProject(this.$route.params.id);
            } catch(err) {
                this.error = err.message;
            }

        //    this.id = this.$route.params.id; 
        },
        methods: {
           async addTodo(){
                await ProjectService.insertTodo(this.$route.params.id, "Project Test Fila");
                console.log(this.todo);
            // this.projects = await ProjectService.getProjects();
                this.$router.go();

           },
           async toggleCompleted(){
               await ProjectService.toggleCompleted();
               console.log("updated");
               this.$router.go();
           }
        },
        computed: {
            
        }
    }
</script>

<style lang="scss" scoped>
    .project-page {
        padding: 50px 0;
    }
    .nav {
        margin-bottom: 50px;

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