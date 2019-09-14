<template>
  <div id="app">
    <div class="main-layout">
      <div class="leftbar">
        <following />
        <followers />
      </div>
      <div class="main-content-container">
        <div id="nav">
          <router-link to="/">Home</router-link>
        </div>
        <router-view />
      </div>
    </div>
    <!-- <div class="container-fluid">
      <div class="row">
        <div class="col-3" id="sidenav">
          <sidenav />
        </div>
        <div class="col-9" id="main">
          <router-view />
        </div>
      </div>
    </div>-->
    <!-- <div class="user container-fluid">
    <div class="row"> 
      <div class="col-3"> 
        
      <userview v-for="user in userviews" :userProp="user" :key="user._id"/>
    

    </div>-->
  </div>
</template>

<script>
import Followers from "./components/Followers";
import Following from "./components/Following";

export default {
  name: "App",
  components: { Followers, Following }
};
</script>

<style>
.main-layout {
  display: grid;
  grid-template-areas: "sidebar . main";
  grid-template-columns: 25% 1fr;
  grid-row: auto;
}

.leftbar {
  grid-area: sidebar;
  padding-right: 10px;
}

.main-layout-container {
  grid-area: main;
}

/* #navbar a {
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
} */
</style>