<template>
    <div>
        <router-link class="project-page-link" :to="{ name: 'project', params: { id: singleProject._id } }">Go Back</router-link>
        <div v-if="todo = !null" class="todoList">
            <div class="todos" v-for="(todo, index) in singleProject.todos" :key="index">
                <p>{{todo.todo}}</p>
                <p v-if="todo.completed == false">Completed: False</p>
                <p v-else>Completed: True</p>
                <button @click="removeTodo(todo)">remove</button>
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
        }
    }
</script>

<style lang="scss" scoped>

</style>