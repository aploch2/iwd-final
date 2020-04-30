<template>
    <div class="project-card">
        <div class="img-container">
            <img :src="image" alt="Project Image">
        </div>
        <div class="card-info">
            <h3>{{ title }}</h3>
            <p><span>Deadline: </span>{{ deadline }}</p>
            <div class="link-container">
                <a :href="link" target="_blank">GitHub Link</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectCard",
        props: {
            title: String,
            deadline: String,
            link: String,
            image: String,
        },
        components: {

        },
        methods: {

        },
    }
</script>

<style lang="scss" scoped>
    .project-card {
        // width: 200px;
        // height: 200px;
        background-color: #ccc;
        margin-top: 50px;
        border-radius: 3px;
        
        .card-info {
            padding: 20px;
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
            a {
                color: purple;
                text-decoration: none;
                padding: 10px;
                border: 1px solid purple;
                border-radius: 3px;
                // margin-bottom: 25px;
                transition: 0.3s ease-in-out;

                &:hover {
                    background-color: purple;
                    color: white;
                    transition: 0.3s ease-in-out;
                }  
            }
        }
    }
</style>