<template>
  <div class="home">
    <router-link to="/add-project" id="add-project">New Project</router-link> 
    <div class="project-container">
      <ProjectCard title="Project 1" deadline="10/12/20" link="https://www.github.com/aploch2/iwd-final.git" image="https://i.redd.it/jrwcxz1l8tu41.jpg"></ProjectCard>
      <ProjectCard title="Project 2" deadline="10/20/20" link="https://www.github.com/aploch2/iwd-final.git" image="https://i.redd.it/jrwcxz1l8tu41.jpg"></ProjectCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "Home",
  components: {
    ProjectCard,
  }
};
</script>
<style lang="scss" scoped>
  #add-project {
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
  .project-container {
    display: flex;
    justify-content: space-evenly;
  }
</style>
