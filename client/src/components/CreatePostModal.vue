<template>
  <div class="PostModal">
    <div id="create-post-modal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal.title">Post Pizza</h5>
          </div>
          <div class="form-group">
            <label for="imgurl">Image Url</label>
            <input
              type="text"
              class="form-control"
              id="imgURL"
              placeholder="Enter imgurl"
              v-model="newPost.imgURL"
            />
          </div>
          <div class="modal-body">
            <form @submit.prevent="addPost()">
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="Enter Title"
                  v-model="newPost.title"
                  required
                />
              </div>
              <div class="form-group">
                <label for="body">Body</label>
                <input
                  type="text"
                  class="form-control"
                  id="body"
                  placeholder="Enter body"
                  v-model="newPost.body"
                />
              </div>
              <div class="form-group">
                <label for="location">Location</label>
                <input
                  type="text"
                  class="form-control"
                  id="location"
                  placeholder="Enter location"
                  v-model="newPost.location"
                />
              </div>
              <button type="submit" class="btn btn-primary">Post</button>
            </form>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "create-post-modal",
  data() {
    return {
      newPost: {}
    };
  },
  computed: {
    user() {
      debugger;
      return this.$store.state.activeUser;
    }
  },
  methods: {
    addPost() {
      this.newPost.userId = this.user._id;
      this.$store.dispatch("addPost", this.newPost);
      this.newPost = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>