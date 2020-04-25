<template>
  <div class="home">
    <router-link to="/add-project" id="add-project">New Project</router-link> 
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {

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
</style>
