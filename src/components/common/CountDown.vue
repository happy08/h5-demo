<!--获取验证码60秒倒计时-->
<template>
  <div> 
    <button
      type="warning"
      size="small"
      v-show="isShow"
      :disabled="!isShow"
      @click="getSmsCode()"
    >获取验证码</button>
    <button type="warning" size="small" v-show="!isShow" disabled>{{authTime}}s后重新获取</button>
  </div>
</template>
<script>
export default {
  name: "CountDown",
  props: {
    phone: {
      type: String,
      required: true, //必填
      default: ""
    },
    code: {
      type: [String, null],
      required: false,
      default: null
    }
  },
  components: {},
  data() {
    return {
      isShow: true, // 按钮显示隐藏
      authTime: 0 // 倒计时
    };
  },

  methods: {
    //获取验证码
    getSmsCode() {
      if (this.imgCode !== null) {
        console.log("图形验证码错误");
        return;
      }
      if (this.phone == "" || this.phone == undefined) {
        console.log("请填写手机号");
        return;
      } else if (!this.$utils.isPhone(this.phone)) {
        console.log("手机号输入有误");
        return;
      }
      this.isShow = false; // 显示隐藏
      this.authTime = 60;
      let timer = setInterval(() => {
        this.authTime--;
        if (this.authTime <= 0) {
          this.isShow = true;
          window.clearInterval(timer);
        }
      }, 1000);
    }
  },
  destroyed() {
    window.clearInterval(timer);
  }
};
</script>