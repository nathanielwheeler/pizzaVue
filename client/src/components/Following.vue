<template>
  <div class="following">
    <h5 class="text-center">Users Following</h5>
    <!-- <user v-for /> -->
  </div>
</template>


<script>
import User from "./User";

export default {
  name: "following",
  data() {
    return {};
  },
  computed: {
    following() {
      return this.$store.state.following;
    }
  },
  methods: {},
  components: { User }
};
</script>


<style scoped>
.following {
  height: 50vh;
  overflow-y: auto;
}
</style>
