<template>
  <div class="pdb-safe-0">
    <base-header title="验证"></base-header>

    <div class="container">
      <div class="pd-15 fs-16">
        <input type="text" v-validate="'required|length:6,12'" data-vv-name="名称" style="background: #fff; width:100%" />
        <div class="pd-15">
          <button @click="onSubmit">提交</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
//http://vee-validate.logaretm.com/v2/guide/
import "@/utils/validate";

export default {
  name: "validate",
  data() {
    return {
      username: ""
    };
  },
  components: {},
  created() {},
  methods: {
    onSubmit() {
      // 验证
      this.$validator.validateAll().then(result => {
        if (result) {
          console.log("成功");
        } else {
          console.log(this.errors.items[0].msg); //失败提示
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
</style>