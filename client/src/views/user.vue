<template>
  <div class="user container-fluid">
    <h1>Hello {{user.name}}</h1>
    <div class="row">
      <div class="col-12">
        <post v-for="post in posts" :postProp="post" :key="user.id" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "user",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getActiveUser");
  },
  computed: {
    user() {
      return this.$store.state.activeUser;
    },
    posts() {
      return this.$store.state.posts;
    },
    methods: {},
    components: { Post }
  }
};
</script>


<style scoped>
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

.sticky+.content {
  padding-top: 60px; 
} */
</style>
