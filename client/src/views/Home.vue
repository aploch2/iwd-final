<template>
  <div class="home">
    <h1 class="pageTitle">{{ pageTitle }}</h1>
    <Navbar />
    <Projects :projects="projects" />
    <!-- <DeleteModal /> -->
     
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Projects from "@/components/Projects.vue";
import ProjectService from "../ProjectService";
import Navbar from "@/components/Navbar";
// import DeleteModal from "@/components/DeleteModal.vue";

export default {
  name: "Home",
  props: {
    
  },
  components: {
    Projects,
    Navbar,
    // DeleteModal,
  },
  data() {
    return {
      pageTitle: "Project Manager",
      projects: [],
      error: '',
      title: '',
      deadline: '',
      link: '',
    }
  },
  async created() {
      try { 
        this.projects = await ProjectService.getProjects();
      } catch(err) {
        this.error = err.message;
      }
    },
    methods: {
      
    }
};
</script>
<style lang="scss" scoped>
  #delete-modal {
    display: none;
  }
</style>
