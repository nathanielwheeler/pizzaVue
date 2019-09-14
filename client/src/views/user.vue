<template>
  <div class="user container-fluid">
    <div class="row">
      <div class="col">
        <CreatePostModal />
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#create-post-modal"
        >Create Post</button>
      </div>
      <div class="row">
        <div class="col-6">
          <post v-for="post in posts" :postProp="post" :key="post.id" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Post from "../components/Post";
import CreatePostModal from "../components/CreatePostModal";
export default {
  name: "user",
  data() {
    return {};
  },
  mounted() {
    // this.$store.dispatch("getActiveUser");
    // let payload = { userId: this.$route.params.id };
    if (this.$route.params.id) {
      this.$store.dispatch("getPosts", this.$route.params.id);
    } else {
      this.$store.dispatch("getPosts", this.user._id);
    }
  },
  computed: {
    user() {
      return this.$store.state.activeUser;
    },
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {},
  components: { Post, CreatePostModal }
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
