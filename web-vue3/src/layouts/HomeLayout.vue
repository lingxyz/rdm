/**
 * 首页的layout模板
 */
<template lang="pug">
a-layout
  a-layout-header.header(style="color: #ffffffa6;")
    .logo
    HomeHead(@selectedKey-emit="parentEmit")
  a-layout-content(
    :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
  )
    slot
  a-layout-footer Footer
</template>
<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from 'vue'
import HomeHead from '../components/HomeHead.vue'

export default defineComponent({
  components: {
    HomeHead,
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
#app, .ant-layout {
  height: 100%;
}
</style>
