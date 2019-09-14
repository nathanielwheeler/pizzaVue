<template>
  <div class="followers">
    <h5 class="text-center">Followers</h5>
  </div>
</template>


<script>
import User from "./User";

export default {
  name: "followers",
  data() {
    return {};
  },
  computed: {
    followers() {
      return this.$store.state.followers;
    }
  },
  methods: {},
  components: { User }
};
</script>


<style scoped>
.followers {
  height: 50vh;
  overflow-y: auto;
}
</style>