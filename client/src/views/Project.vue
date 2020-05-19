<template>
    <div class="project-page">
        <div class="nav">
            <router-link to="/" id="go-back" >Go Back</router-link>
           <router-link class="project-edit-page-link" :to="{ name: 'project-edit', params: { id: singleProject._id } }">Edit</router-link>
        </div>
        <h1>{{singleProject.title}}</h1>
        <h5><a :href="singleProject.link">Github Link</a></h5>
        <h3>{{singleProject.deadline}}</h3>
        <h3>Add New Todo</h3>
        <input type="text" v-model="newTodo" name="newTodo"> 
        <button @click="addTodo(newTodo)">Add</button>
        <div v-if="todo = !null" class="todoList">
            <div class="todos" v-for="(todo, index) in singleProject.todos" :key="index">
                <p>{{todo.todo}}</p>
                <p v-if="todo.completed == false">Completed: False</p>
                <p v-else>Completed: True</p>
                <!-- <p @click="removeTodo(todo)">remove</p> -->
            </div>
        </div>

    </div>
</template>

<script>
import ProjectService from "../ProjectService";

    export default {
        props: [
            'newTodo', "id"
        ],
        data() {
            return {
                singleProject: [],
                projectTitle: '',
                projectLink: '',
                projectDeadline: '',
                todoNew: 'newTodo',
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
           async addTodo(todoNew){
                await ProjectService.insertTodo(this.$route.params.id, todoNew);
                // console.log(this.newTodo);
                this.$router.go();

           },
           async removeTodo(todo){
               await ProjectService.pullTodo(todo.todo);
               console.log(todo.todo);
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