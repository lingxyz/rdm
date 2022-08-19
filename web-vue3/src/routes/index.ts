import { createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const home = () => import('../pages/home.vue')
const library = () => import('../pages/library.vue')
const process = () => import('../pages/process.vue')
const headcount = () => import('../pages/headcount.vue')
const projectBoard = () => import('../pages/project/board.vue')
const projectPlan = () => import('../pages/project/plan/index.vue')
const projectDaily = () => import('../pages/project/daily.vue')
const projectRelease = () => import('../pages/project/release.vue')
const projectReview = () => import('../pages/project/review.vue')
const projectRuality = () => import('../pages/project/quality.vue')
const projectPlanSchedule = () => import('../pages/project/plan/schedule.vue')
const workplace = () => import('../pages/workplace/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/workplace",
    name: "workplace",
    component: workplace
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
  {
    path: "/project/quality",
    name: "projectRuality",
    component: projectRuality
  },
  {
    path: "/project/plan/schedule",
    name: "projectPlanSchedule",
    component: projectPlanSchedule
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})