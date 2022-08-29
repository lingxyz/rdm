// todo: 调试
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// devRoute是显示在本地导航的，也可以本地和线上使用一致
export let devRouteMap : Array<RouteRecordRaw> = []
const files = require.context('./', false, /\/*Router.ts$/)
files.keys().forEach(file => {
  // 遍历路由文件，动态常见路由
  Object.keys(files(file)).forEach((item) => {
    // 这个 node 就是每个文件的数组array
    const node = files(file)[item]
    devRouteMap = devRouteMap.concat(node)
  })
})
// console.log('devRouteMap = ', devRouteMap)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: devRouteMap
})

export default router
