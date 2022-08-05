/**
 * 左侧导航栏
 */
<template lang="pug">
a-menu(
  v-model:selectedKeys="selectedKeys",
  v-model:openKeys="openKeys",
  mode="inline",
  :style="{ height: '100%', borderRight: 0 }"
)
  //- 工作台
  a-menu-item(key="sub7" v-if="navHeadSelectedKey == 1")
    history-outlined
    span 工作台
  a-sub-menu(key="sub6" v-if="navHeadSelectedKey == 1")
    template(#icon)
      fund-projection-screen-outlined
    template(#title)
      subnav 仪表盘
    a-menu-item(key="18") 分析页
    a-menu-item(key="19") 监控页
  a-sub-menu(key="sub4" v-if="navHeadSelectedKey == 1")
    template(#icon)
      user-outlined
    template(#title)
      subnav 个人中心
    a-menu-item(key="16") 个人看板
    a-menu-item(key="17") 个人设置
  a-sub-menu(key="sub5" v-if="navHeadSelectedKey == 1")
    template(#icon)
      SettingOutlined
    template(#title)
      subnav 系统管理
    a-menu-item(key="13") 用户管理
    a-menu-item(key="14") 角色管理
    a-menu-item(key="15") 权限管理
  //- 项目管理
  a-menu-item(
    :key="index + 1",
    v-for="(link, index) in links",
    @click="handleLink(link)"
    v-if="navHeadSelectedKey == 2"
  )
    project-outlined
    span {{link.text}}
  //- 技术架构
  a-sub-menu(key="6" v-if="navHeadSelectedKey == 3")
    template(#icon)
      laptop-outlined
    template(#title)
      subnav 技术基建
    a-menu-item(key="sub:1") xxx
  a-sub-menu(key="7" v-if="navHeadSelectedKey == 3")
    template(#icon)
      laptop-outlined
    template(#title)
      subnav 技术中台
    a-menu-item(key="sub:1") xxx
  a-sub-menu(key="8" v-if="navHeadSelectedKey == 3")
    template(#icon)
      laptop-outlined
    template(#title)
      subnav 业务中台
    a-menu-item(key="sub:1") xxx
  //- 团队管理
  a-menu-item(key="9" v-if="navHeadSelectedKey == 4")
    history-outlined
    span 资源分析
  a-menu-item(key="10" v-if="navHeadSelectedKey == 4")
    history-outlined
    span 员工招聘
  a-menu-item(key="11" v-if="navHeadSelectedKey == 4")
    history-outlined
    span 员工成长
  a-menu-item(key="12" v-if="navHeadSelectedKey == 4")
    history-outlined
    span 绩效管理
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from "vue";

export default defineComponent({
  props:{
    navHeadSelectedKey: String
  },
  setup(props) {
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
      {
        text: "质量监测",
        url: "/project/quality",
      },
    ]);
    // 跳转
    const { proxy } = getCurrentInstance();

    const handleLink = (link) => {
      proxy.$router.push(link.url);
    };

    console.log(props.navHeadSelectedKey);

    return {
      links,
      handleLink,
      selectedKeys: ref<string[]>(["1"]),
      openKeys: ref<string[]>(["1"]),
    };
  },
});
</script>