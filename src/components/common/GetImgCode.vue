<!--获取图形验证码-->
<template>
     <img :src="imgCode" @click="getImgCode" />
</template>
<script>
  export default {
    name: 'GetImgCode',
    props: {
      random: {
        type: [String,Number],
        required: false
      }
    },
    data() {
      return {
        imgCode: this.$api.config.DOMAIN_VERTIFY
      }
    },
    watch:{
      //变化时重新获取验证码
      random:'getImgCode'
    },
    methods: {
      // 获取图形验证码
      getImgCode() {
        this.imgCode = this.$api.config.DOMAIN_VERTIFY + "?id=" + Math.random();
      },
    }
  };
</script>
