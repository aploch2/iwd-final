<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/AddProject">Add Project</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
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
