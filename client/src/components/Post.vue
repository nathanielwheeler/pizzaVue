<template>
  <div class="col-4 Post m-auto" @click="postDetails()">
    <img :src="postProp.imgURL" alt />
    <h4>{{postProp.title}}</h4>
    <h5>{{postProp.user.name}}</h5>
  </div>
</template>

<script>
export default {
  name: "post",
  props: ["postProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    postDetails() {
      this.$router.push({
        name: "postDetails",
        params: { postId: this.postProp._id }
      });
    }
  }
};
</script>

<style>
img {
  height: 200px;
}
</style>
