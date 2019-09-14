<template>
  <div class="user container-fluid">
    <div class="row">
      <SearchComponent />
      <span>
        <CreatePostModal />
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#create-post-modal"
        >Create Post</button>
        <post v-for="post in posts" :postProp="post" :key="post.id" />
      </span>
    </div>
  </div>
</template>

//Placeholder

<script>
import SearchComponent from "../components/SearchComponent";
import Post from "../components/Post";
import CreatePostModal from "../components/CreatePostModal";
import Following from "../components/Following";
import Followers from "../components/Followers";
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
  components: { Post, CreatePostModal, SearchComponent }
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
