/**
 * 默认的layout模板
 */
<template lang="pug">
a-layout
  a-layout-header.header
    .logo
    NavHead(@selectedKey-emit="parentEmit")
  a-layout
    a-layout-sider(width="200" style="background: #fff")
      NavSide(:navHeadSelectedKey="navHeadSelectedKey")
    a-layout(style="padding: 0 24px 24px")
      a-breadcrumb(style="margin: 16px 0")
        a-breadcrumb-item Home
        a-breadcrumb-item List
        a-breadcrumb-item App
      a-layout-content(
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
      )
        slot
</template>
<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from 'vue'
import NavHead from '../components/NavHead.vue'
import NavSide from '../components/NavSide.vue'

export default defineComponent({
  components: {
    NavHead,
    NavSide,
  },
  setup() {
    const { proxy } = getCurrentInstance();

    let navHeadSelectedKey = ref(1);
    function parentEmit(val) {
      proxy.navHeadSelectedKey = val[0];
    }
    return {
      collapsed: ref<boolean>(false),
      navHeadSelectedKey,
      parentEmit,
    };
  },
});
</script>
<style>
.header .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl .header .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
