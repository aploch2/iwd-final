<template>
  <div class="home">
    <header class="wrapper">
      <h1 class="pageTitle">{{ pageTitle }}</h1>
      <p>Manage your projects and stay organized.</p>
      <Navbar />
      <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi debitis porro sit totam consectetur obcaecati eos eius, temporibus magni dolores libero ducimus maiores tempora odio expedita alias, magnam nulla illum in vitae quod? Quidem iusto libero non neque asperiores inventore beatae, reiciendis, itaque totam at explicabo suscipit dolores, recusandae ab?</p> -->
    </header>
    
    <CurrentProjects />
    <!-- <DeleteModal /> -->
     
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar";
import CurrentProjects from "@/components/CurrentProjects"
// import DeleteModal from "@/components/DeleteModal.vue";

export default {
  name: "Home",
  props: {
    
  },
  components: {
    Navbar,
    CurrentProjects
    // DeleteModal,
  },
  data() {
    return {
      pageTitle: "Project Manager",
      error: '',
      title: '',
      deadline: '',
      link: '',
    }
  },
    methods: {
      
    }
};
</script>
<style lang="scss" scoped>
  h1 {
    font-size: 3em;
    margin-bottom: 10px;
  }
  .wrapper {
    width: 80%;
    margin: 0 auto;
  }
  header {
    padding: 50px 0;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #delete-modal {
    display: none;
  }
  
</style>
