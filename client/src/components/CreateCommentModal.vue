<template>
  <div class="CommentModal">
    <div id="create-comment-modal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal.title">Add A Comment</h5>
          </div>

          <div class="modal-body">
            <form @submit.prevent="addComment()">
              <div class="form-group">
                <label for="body">Body</label>
                <input
                  type="text"
                  class="form-control"
                  id="body"
                  placeholder="Enter body"
                  v-model="newComment.body"
                />
              </div>

              <button type="submit" class="btn btn-primary">Comment</button>
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
  name: "create-comment-modal",
  data() {
    return {
      newComment: {}
    };
  },
  computed: {
    post() {
      return this.$store.state.activePost;
    }
  },
  methods: {
    addComment() {
      // this.newComment.userId = this.user._id;
      this.newComment.postId = this.post._id;
      this.$store.dispatch("addComment", this.newComment);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>