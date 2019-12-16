<template>
  <div class="base-tabbar">

    <div class="flex between pd-15 fs-14">
      <router-link to="/">Home</router-link>
      <router-link to="validate">Validate</router-link>
      <router-link to="user">User</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "BaseTabbar",
  data() {
    return {
    };
  },
  components: {
  }
};
</script>

<style scoped lang="less">
@import "../assets/css/_variable.less";
.base-tabbar {
  background: #fff;
  z-index: 10;
  transition: 0s;
  transform: translateY(@tabbarHeight);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: @tabbarHeight;
}
.base-tabbar.show {
  transform: translateY(0px);
}
</style>
