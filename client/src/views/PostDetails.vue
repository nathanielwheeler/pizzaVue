<template>
  <div class="postDetails">
    <h1>{{postDetails.title}}</h1>
    <img :src="postDetails.imgURL" alt />
    <p>{{postDetails.body}}</p>
    <p>{{postDetails.location}}</p>
    <p>{{postDetails.user.name}}</p>

    <comment v-for="comment in comments" :commentProp="comment" :key="comment.id" />
  </div>
</template>


<script>
import Post from "../components/Post";
import Comment from "../components/Comment";

export default {
  name: "postDetails",
  data() {
    return {};
  },
  mounted() {
    let payload = {
      postId: this.$route.params.postId
    };
    this.$store.dispatch("getPostById", payload);
    this.$store.dispatch("getComments", payload);
  },
  computed: {
    postDetails() {
      return this.$store.state.activePost;
    },
    comments() {
      return this.$store.state.comments;
    }
  },
  methods: {},
  components: { Comment }
};
</script>


<style scoped>
</style>