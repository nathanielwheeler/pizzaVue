<template>
  <div id="app">
    <!-- <div class="user container-fluid">
    <div id="navbar">
      <a href="#home">Home</a>
      <a href="user">User</a>
      </div> 
    <div class="row"> 
      <div class="col-3"> 
        
      <userview v-for="user in userviews" :userProp="user" :key="user._id"/>
    

    </div>-->
    <router-link to="/">userview</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#navbar a {
  float: left;
  display: block;
  color: gray;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

.content {
  padding: 16px;
}

.sticky + .content {
  padding-top: 60px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>