<!--提交时防暴力点击 延迟1秒-->
<template>
  <button @click="onclick">{{title}}</button>
</template>
<script>
export default {
  name: "DelayButton",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      buttonStatus: true,
      stopTime: null
    };
  },
  methods: {
    onclick() {
      if (this.buttonStatus) {
        this.buttonStatus = false;
        this.$emit("onclick");
      }
      this.setButton();
    },
    setButton() {
      //添加一个定时器，点击之后延时1s
      clearTimeout(this.stopTime);
      this.stopTime = setTimeout(() => {
        this.buttonStatus = true;
      }, 1000);
    }
  }
};
</script>
