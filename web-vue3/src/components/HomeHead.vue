/**
 * 头部导航栏-home页
 */
<template lang="pug">
a-menu(
  v-model:selectedKeys="selectedKey"
  theme="dark"
  mode="horizontal"
)
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
  a-menu-item(key="")
    span &nbsp;
  a-menu-item(key="")
    span &nbsp;
  a-menu-item(key="")
    span &nbsp;
  a-menu-item(key="")
    span &nbsp;
  a-menu-item(key="1")
    history-outlined
    span 工作台
  a-menu-item(key="4" @click="handleLink('/workplace')")
    laptop-outlined
    span 登录
  a-menu-item(key="5")
    team-outlined
    span 注册
</template>

<script lang="ts">
import { defineComponent, ref, watch, getCurrentInstance } from 'vue';
export default defineComponent({
  setup(props, {emit}) {
    const selectedKey = ref<string[]>(['1']);
    watch(selectedKey, newValue => {
      emit('selectewedKey-emit', newValue)
    });
    // 跳转
    const { proxy } = getCurrentInstance();
    const handleLink = (link) => {
      proxy.$router.push(link.url);
    };
    return {
      selectedKey,
      handleLink,
    };
  },
});
</script>
