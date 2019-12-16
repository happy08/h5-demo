<template>
  <div class="base-header">

    <div class="flex between pd-10 fs-16">
      <div @click="onClickLeft">
        返回
      </div>
      {{title}}
    </div>

  </div>
</template>

<script>
export default {
  name: "BaseHeader",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  components: {},
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
@import '../assets/css/_variable.less';
.base-header {
  background: #fff;
  height: @headerHeight;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: content-box;
  padding-top: calc( constant(safe-area-inset-top)); /*20*/
  padding-top: calc( env(safe-area-inset-top));

}
</style>
