<template>
  <div class="Post card" @click="postDetails()">
    <div class="card-img-top">
      <img :src="postProp.imgUrl" alt />
      <div class="card-title">
        <h4>{{postProp.title}}</h4>
        <h5>{{postProp.user.name}}</h5>
      </div>
    </div>
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
    // postDetails() {}
  }
};
</script>

<style>
</style>
