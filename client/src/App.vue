<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-3" id="sidenav">
          <div id="sidenav">
            <Following />
            <Followers />
          </div>
        </div>
        <div class="col-9" id="main">
          <router-view />
        </div>
      </div>
    </div>
    <!-- <div class="user container-fluid">
    <div class="row"> 
      <div class="col-3"> 
        
      <userview v-for="user in userviews" :userProp="user" :key="user._id"/>
    

    </div>-->
  </div>
</template>

<script>
import Following from "./components/Following";
import Followers from "./components/Followers";

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
#sidenav {
  height: 100vh;
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