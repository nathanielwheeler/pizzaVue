<template>
  <div class="Post" @click="postDetails()">
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
        name: user,
        params: { postId: this.postProp.userId }
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
