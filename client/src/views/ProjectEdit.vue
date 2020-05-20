<template>
    <div class="project-edit-page">
        <router-link class="project-page-link" :to="{ name: 'project', params: { id: singleProject._id } }">&lsaquo; Go Back</router-link>
        <!-- <h1>Edit {{singleProject.title}}</h1> -->
        <h1>Delete Items</h1>
        <div v-if="todo = !null" class="todoList">
            <div class="todos" v-for="(todo, index) in singleProject.todos" :key="index">
                <p>{{todo.todo}}</p>
                <!-- <input type="text" v-model="todo.todo"> -->
                <!-- <p v-if="todo.completed == false">Completed: False</p>
                <p v-else>Completed: True</p> -->
                <font-awesome-icon icon="trash-alt"  @click="removeTodo(todo)" class="remove-todo" />
                <!-- <button @click="toggleCompleted(todo)" v-if="todo.completed == false">complete</button>
                <button @click="toggleCompleted(todo)" v-if="todo.completed == true">uncomplete</button> -->
                
            </div>
        </div>
    </div>
</template>

<script>
import ProjectService from "../ProjectService";

    export default {
        props: [
            'id',
        ],
        data() {
            return {
                singleProject: [],
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
            async removeTodo(todo){
               await ProjectService.pullTodo(this.$route.params.id, todo.todo);
               console.log(todo.todo);
               this.$router.go();
           },
           async toggleCompleted(todo){
               if (todo.completed == false) {
                   todo.completed = true;
               } else {
                   todo.completed = false;
               }
               await ProjectService.todoComplete(this.$route.params.id, todo.completed, todo.todo);
               console.log(todo.completed);
               this.$router.go();
           }
        }
    }
</script>

<style lang="scss" scoped>
.project-edit-page {
    padding: 50px 0;
}
.project-page-link {
    // margin-bottom: 50px;
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
h1 {
    margin-top: 50px;
}
.todoList {
    width: 50%;
    margin: 0 auto;
    margin-top: 25px;

    .todos {
        margin-bottom: 25px;
        padding: 10px;
        background-color: rgba(0,0,0,0.075);
        border-radius: 3px;
        display: flex;
        justify-content: space-between;
    }
}
.remove-todo {
    border: none;
    color: purple;
    transition: 0.15s ease-in-out;

    &:hover {
        color: lighten(purple, 50);
        transition: 0.15s ease-in-out;
    }
}
</style>