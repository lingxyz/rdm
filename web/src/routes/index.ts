import { createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const library = () => import('../pages/library.vue')
const process = () => import('../pages/process.vue')
const headcount = () => import('../pages/headcount.vue')
const projectBoard = () => import('../pages/project/board.vue')
const projectPlan = () => import('../pages/project/plan.vue')
const projectDaily = () => import('../pages/project/daily.vue')
const projectRelease = () => import('../pages/project/release.vue')
const projectReview = () => import('../pages/project/review.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/project/board'
  },
  {
    path: "/project/board",
    name: "projectBoard",
    component: projectBoard
  },
  {
    path: "/project/plan",
    name: "projectPlan",
    component: projectPlan
  },
  {
    path: "/project/daily",
    name: "projectDaily",
    component: projectDaily
  },
  {
    path: "/project/release",
    name: "projectRelease",
    component: projectRelease
  },
  {
    path: "/project/review",
    name: "projectReview",
    component: projectReview
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})