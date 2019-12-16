<template>
  <div id="app" class="layout">
    <transition :name="transition">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view class="wrapper"></router-view>
      </keep-alive>
      <router-view class="wrapper" v-else></router-view>
    </transition>

    <base-tabbar :class="{'show':tabbarShow}" />
  </div>
</template> 

<script>
import BaseTabbar from "@/components/BaseTabbar.vue";

export default {
  name: "App",
  data() {
    return {
      transition: "",
      tabbarShow: false
    };
  },
  components: {
    BaseTabbar
  },
  watch: {
    // 监听路由
    $route(to, from) {
      //判断前进后退
      if (to.meta.index == from.meta.index || from.meta.index == undefined) {
        this.transition = "slide-fade";
      } else if (to.meta.index > from.meta.index) {
        this.transition = "slide-left";
      } else {
        this.transition = "slide-right";
      }

      //判断是否显示tabbar
      if (
        to.path == "/" ||
        to.path == "/home" ||
        to.path == "/user"
      ) {
        this.tabbarShow = true;
      } else {
        this.tabbarShow = false;
      }
    }
  }
};
</script>

<style lang="less" scope>
@import './assets/css/_variable.less';
/*利用fixed回到顶部*/
.slide-fade-enter-active {
  transition: transform 10ms;
  position: fixed;
  width: 100%;
  top: 0;
  opacity: 1;
}
/*页面切换效果*/
// .slide-right-enter-active,
// .slide-right-leave-active,
// .slide-left-enter-active,
// .slide-left-leave-active {
//   will-change: transform;
//   transition: transform 300ms;
//   transition-timing-function: ease-out; //cubic-bezier(0.1, 0.2, 0.3, 1)
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
// }
// .slide-right-enter-active {
//   position: relative;
//   transform: translate3d(0, 0, 0);
//   z-index: 8 !important;
// }
// .slide-right-enter {
//   transform: translate3d(-30%, 0, 0);
// }
// .slide-right-leave-active {
//   z-index: 9 !important;
//   transform: translate3d(100%, 0, 0);
// }
// .slide-left-enter {
//   transform: translate3d(100%, 0, 0);
// }
// .slide-right-leave-active,
// .slide-left-enter-active {
//   overflow-y: hidden !important;
//   height: 100vh;
// }
// .slide-left-leave-active {
//   transform: translate3d(-30%, 0, 0);
//   position: relative;
// }


.slide-right-leave-active,
.slide-left-enter-active {
  position: fixed;
  will-change: transform;
  transition: transform 300ms;
  transition-timing-function: ease-out; //cubic-bezier(0.1, 0.2, 0.3, 1)
  overflow-y: hidden !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
.slide-right-enter-active,
.slide-left-leave-active {
  position: relative;
  will-change: margin-left;
  transition: margin-left 300ms;
  transition-timing-function: ease-out;
  width: 100%;
}
.slide-right-enter-active {
  margin-left: 0;
  z-index: 8 !important;
}
.slide-right-enter {
  margin-left: -30%;
}
.slide-right-leave-active {
  z-index: 9 !important;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  transform: translate3d(100%, 0, 0);
}
// .slide-left-enter-active {
// }
.slide-left-leave-active {
  margin-left: -30%;
}


//子路由动画
// .slide-child-enter-active,
// .slide-child-leave-active {
//   transition: transform 400ms;
// }
// .slide-child-enter,
// .slide-child-leave-active {
//   transform: translateX(100%);
// }

</style>
