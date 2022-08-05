/**
 * 头部导航栏
 */
<template lang="pug">
a-menu(
  v-model:selectedKeys="selectedKey"
  theme="dark"
  mode="horizontal"
)
  a-menu-item(key="1")
    history-outlined
    span 工作台
  a-sub-menu(key="2")
    template(#icon)
      project-outlined
    template(#title) 项目管理
    a-menu-item-group(title="上海IT")
      a-menu-item(key="2") 项目名称1
      a-menu-item(key="2") 项目名称2
    a-menu-item-group(title="烟台IT")
      a-menu-item(key="2") 项目名称1
      a-menu-item(key="2") 项目名称2
  a-menu-item(key="3")
    laptop-outlined
    span 技术架构
  a-menu-item(key="4")
    team-outlined
    span 团队管理
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  setup(props, {emit}) {
    const selectedKey = ref<string[]>(['1']);
    watch(selectedKey, newValue => {
      emit('selectedKey-emit', newValue)
    });
    return {
      selectedKey,
    };
  },
});
</script>
