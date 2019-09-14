<template>
  <div class="comments">
    <p>{{commentProp.body}}</p>
  </div>
</template>

<script>
export default {
  name: "comments",
  props: ["commentProp"],
  data() {
    return {};
  },
  computed: {
    postComments() {
      return this.$store.state.comments;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>