<!--返回顶部-->
<template>
  <div v-show="isShow" @click="toTop" class="to-top">Top</div>
</template>
<script>
export default {
  name: "toTop",
  data() {
    return {
      isShow: false
    };
  },
  watch: {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    toTop() {
      this.$utils.toTop();
    },
    handleScroll() {
      //获取滚动距顶部的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 200) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="less" scoped>
.to-top {
  position: fixed;
  bottom: 60px;
  right: 30px;
  width: 40px;
  height: 40px;
  line-height: 35px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  text-align: center;
}
</style>

