/**
 * 产品需求浮窗
 */
<template lang="pug">
div.demand-content(draggable="true")
  h1 本页需求：
  slot
    i 产品需求浮窗插槽，请在此处填写 HTML 内容
</template>

<style lang="stylus" scoped>
.demand-content
  position fixed
  top 10%
  right 10%
  border 1px solid #ccc
</style>