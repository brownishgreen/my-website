import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'

//Essays
import ThirtyTwo from '../pages/essays/2025/ThirtyTwo.vue'
import LearnHowToLearn from '../pages/essays/2025/LearnHowToLearn.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/essays/thirty-two',
    name: 'thirty-two',
    component: ThirtyTwo,
  },
  {
    path: '/essays/learn-how-to-learn',
    name: 'learn how to learn',
    component: LearnHowToLearn,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
