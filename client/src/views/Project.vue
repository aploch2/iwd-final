<template>
    <div class="project-page">
        <div class="nav">
            <router-link to="/" id="go-back" >&lsaquo; Go Back</router-link>
        </div>
        <h1>{{singleProject.title}}</h1>
        <p class="project-link-container"><a :href="singleProject.link" class="project-link">Github Link</a></p>
        <p>Deadline: {{singleProject.deadline}}</p>
        <div class="add-todo">
            <h3>Add New Todo</h3>
            <div class="add-todo-input">
            <input type="text" v-model="newTodo" name="newTodo">
            <button @click="addTodo(newTodo)">Add</button> 
            <router-link class="project-edit-page-link" :to="{ name: 'project-edit', params: { id: singleProject._id } }">Edit</router-link>
            </div>
        </div>
        
        <div v-if="todo = !null" class="todoList">
            <div class="todos" v-for="(todo, index) in singleProject.todos" :key="index">
                <p>{{todo.todo}}</p>
                <p v-if="todo.completed == false">Completed: <font-awesome-icon icon="times-circle" class="todo-complete-false-icon"/></p>
                <p v-else>Completed: <font-awesome-icon icon="check-circle" class="todo-complete-true-icon" /></p>
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
    .project-edit-page-link {
            margin-top: 25px;
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
    .add-todo {
        margin: 0 auto;
        margin-top: 25px;
        width: 50%;
        border-top: 1px solid rgba(0,0,0,0.1);
        // border-bottom: 1px solid rgba(0,0,0,0.1);
        // border-radius: 3px;
        padding: 25px 0;
        

        .add-todo-input {
            margin-top: 10px;

            input, button {
                padding: 10px;
            }
            input {
                width: 80%;
                border: 1px solid #ccc;
                border-radius: 3px;
                margin-right: 10px;
            }
            button {
                background-color: purple;
                color: white;
                border: 1px solid purple;
                border-radius: 3px;
                padding: 10px 20px;
                margin-right: 10px;
                transition: 0.3s ease-in-out;

                &:hover {
                    background-color: white;
                    color: purple;
                    transition: 0.3s ease-in-out;
                    cursor: pointer;
                }
                
            }
        }
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
        .todo-complete-true-icon {
            color: green;
        }
        .todo-complete-false-icon {
            color: darken(red, 5);
        }
    }
    .project-link-container {
        margin: 25px 0;
    }
    .project-link {
                background-color: purple;
                color: white;
                border: 1px solid purple;
                border-radius: 3px;
                padding: 10px;
                margin: 0 10px;
                text-decoration: none;
                transition: 0.3s ease-in-out;

                &:hover {
                    background-color: white;
                    color: purple;
                    transition: 0.3s ease-in-out;
                    cursor: pointer;
                }
                
    }
</style>