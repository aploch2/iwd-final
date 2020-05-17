<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  // background-color: #ccc;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(128,0,128);
  background: linear-gradient(180deg, rgba(128,0,128,0.25) 0%, rgba(255,255,255,1) 25%); 
  height: 100vh;
} 
.pageTitle {
  margin-top: 25px;
}
</style>
