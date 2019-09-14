<template>
  <div class="search col-12">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button
          class="btn btn-outline-warning"
          type="button"
          id="button-addon1"
          @click="findUsersByName()"
        >Search</button>
      </div>
      <input type="text" class="form-control" placeholder="Search a User..." v-model="query" />
    </div>
    <usersFound v-for="usersFound in users" :userProp="usersFound" :key="usersFound.name" />
  </div>
</template>


<script>
import usersFound from "./UsersFound.vue";

export default {
  name: "search",
  data() {
    return {
      query: ""
    };
  },
  computed: {
    users() {
      return this.$store.state.userSearchResults;
    }
  },
  methods: {
    findUsersByName() {
      //NOTE the first parameter is the name of the action in the store, the second parameter is data we want to send. this.query is the value that we typed into the input stored on the components local data
      this.$store.dispatch("findUsersByName", this.query);
      // this.$router.push({
      //   name: "searchResults",
      //   params: { this.query }
      // })
    }
  },
  components: { usersFound }
};
</script>


<style scoped>
</style>