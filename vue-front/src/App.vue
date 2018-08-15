<template>
  <div id="app">
    <img src="./assets/logo.png">
    <get-user-notes msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
import GetUserNotes from "./components/GetUserNotes.vue";

export default {
  name: "app",
  components: {
    GetUserNotes
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
