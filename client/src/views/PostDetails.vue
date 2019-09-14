<template>
  <div class="postDetails">
    <h1>{{postDetails.title}}</h1>
    <img :src="postDetails.imgURL" alt />
    <p>{{postDetails.body}}</p>
    <p>{{postDetails.location}}</p>
    <p>{{postDetails.user.name}}</p>
    <div class="btn btn-danger" @click="deletePost">Delete Post</div>
    <div>
      <CreateCommentModal />
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#create-comment-modal"
      >+</button> Comments:
      <comment v-for="comment in comments" :commentProp="comment" :key="comment.id" />
    </div>
  </div>
</template>


<script>
import Post from "../components/Post";
import Comment from "../components/Comment";
import CreateCommentModal from "../components/CreateCommentModal";

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
  methods: {
    deletePost() {
      this.$store.dispatch("deletePost", this.$route.params.postId);
    }
  },
  components: { Comment, CreateCommentModal }
};
</script>


<style scoped>
</style>