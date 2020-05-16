<template>
    <div>
        <div class="nav">
            <router-link to="/" id="go-back">Go Back</router-link>
            <button @click="loadProject(id)">Test</button>
        </div>
        <!-- {{ project._id }} -->
        <h3>{{singleProject.title}}</h3>
        <h5><a :href="singleProject.link">Github Link</a></h5>
        <h3>{{singleProject.deadline}}</h3>
        <!-- {{projectTitle}} -->
        <!-- {{ id }} -->
    </div>
</template>

<script>
import ProjectService from "../ProjectService";

    export default {
        props: [
            // 'project', 'id', 'title', 'link', 'deadline'
        ],
        data() {
            return {
                // id: '',
                singleProject: [],
                projectTitle: '',
                projectLink: '',
                projectDeadline: '',
                // id: this.$route.params.id,
                // title: this.project.data.title,
                // link: this.project.data.link,
                // deadline: this.project.data.deadline,
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
            // loadProject(title, id) {
            //     ProjectService.getProject(id);
            //     console.log("page for document with id: " + id + title);

            // },
        },
        computed: {
            validTitle (){
                return "hello"
            }
        }
    }
</script>

<style lang="scss" scoped>
.nav {
        margin-top: 50px;

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