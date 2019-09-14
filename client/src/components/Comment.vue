<template>
  <div class="comments">
    <p>
      {{commentProp.body}}
      <span>
        <button class="btn btn-danger" @click="deleteComment">x</button>
      </span>
    </p>
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
  methods: {
    deleteComment() {
      this.$store.dispatch("deleteComment", this.commentProp);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>