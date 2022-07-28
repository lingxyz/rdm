/**
 * 迭代计划
 */
<template lang="pug">
div(style="margin-bottom: 20px;")
  h1 工具区
  router-link(to='/project/plan/schedule' v-slot="{ navigate }" custom)
    a-button(type="primary" @click="navigate") 排期工具
div
  h1 其它设计待整理
  img(alt="Vue logo" :src="$requireImages('p21.png')" width="800")
  br
  img(alt="Vue logo" :src="$requireImages('p22.png')" width="800")
</template>