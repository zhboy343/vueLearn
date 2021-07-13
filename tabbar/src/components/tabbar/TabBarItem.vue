<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-if="isActive" name="item-icon-active"></slot>
    <div :class="{ active: isActive }">
      <!-- 直接在slot上加动态class不生效
        -因为插槽最后会被插槽内的语句直接替换掉
        -在外层div加 -->
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TarBarItem",
  props: {
    path: String,
  },
  data() {
    return {
      isActive: false,
    };
  },
  components: {},
  methods: {
    itemClick() {
      console.log(this.path);
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;

  /**将默认3px去除 */
  vertical-align: middle;
  margin-bottom: 2px;
}

.active {
  color: #ff5777;
}
</style>
