/**
 * 头部导航栏
 */
<template lang="pug">
a-menu(
  v-model:selectedKeys="selectedKeys1"
  theme="dark"
  mode="horizontal"
  :style="{ lineHeight: '64px' }"
)
  a-sub-menu(key="sub1")
    template(#icon)
      setting-outlined
    template(#title) 模块选择
    a-menu-item-group(title="项目管理")
      a-menu-item(key="setting:1") Option 1
      a-menu-item(key="setting:2") Option 2
    a-menu-item-group(title="技术架构")
      a-menu-item(key="setting:3") Option 3
      a-menu-item(key="setting:4") Option 4
    a-menu-item-group(title="团队管理")
      a-menu-item(key="setting:3") Option 5
      a-menu-item(key="setting:4") Option 6
    a-menu-item-group(title="个人中心")
      a-menu-item(key="setting:3") Option 7
      a-menu-item(key="setting:4") Option 8
  a-menu-item(key="1") nav 1
  a-menu-item(key="2") nav 2
  a-menu-item(key="3") nav 3
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      selectedKeys1: ref<string[]>(['2']),
    };
  },
});
</script>
