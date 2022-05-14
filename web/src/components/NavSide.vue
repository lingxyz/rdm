/**
 * 左侧导航栏
 */
<template lang="pug">
a-menu(
  v-model:selectedKeys="selectedKeys2",
  v-model:openKeys="openKeys",
  mode="inline",
  :style="{ height: '100%', borderRight: 0 }"
)
  a-sub-menu(key="sub1")
    template(#title)
      span
        user-outlined
        subnav 项目管理
    a-menu-item(
      :key="index + 1",
      v-for="(link, index) in links",
      @click="handleLink(link)"
    ) {{link.text}}
  a-sub-menu(key="sub2")
    template(#title)
      span
        laptop-outlined
        subnav 技术架构
    a-menu-item(key="5") option5
    a-menu-item(key="6") option6
    a-menu-item(key="7") option7
    a-menu-item(key="8") option8
  a-sub-menu(key="sub3")
    template(#title)
      span
        notification-outlined
        subnav 团队管理
    a-menu-item(key="9") option9
    a-menu-item(key="10") option10
    a-menu-item(key="11") option11
    a-menu-item(key="12") option12
  a-sub-menu(key="sub4")
    template(#title)
      span
        notification-outlined
        subnav 个人中心
    a-menu-item(key="13") option9
    a-menu-item(key="14") option10
    a-menu-item(key="15") option11
    a-menu-item(key="16") option12
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from "vue";

export default defineComponent({
  setup() {
    const links = ref([
      {
        text: "项目看板",
        url: "/project/board",
      },
      {
        text: "迭代计划",
        url: "/project/plan",
      },
      {
        text: "日会看板",
        url: "/project/daily",
      },
      {
        text: "发布管理",
        url: "/project/release",
      },
      {
        text: "敏捷回顾",
        url: "/project/review",
      },
    ]);
    // 跳转
    const { proxy } = getCurrentInstance();

    const handleLink = (link) => {
      proxy.$router.push(link.url);
    };

    return {
      links,
      handleLink,
      selectedKeys2: ref<string[]>(["1"]),
      openKeys: ref<string[]>(["sub1"]),
    };
  },
});
</script>