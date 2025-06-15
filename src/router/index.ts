import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import Changelog from '../pages/Changelog.vue'

//Essays
import ThirtyTwo from '../pages/essays/2025/ThirtyTwo.vue'
import LearnHowToLearn from '../pages/essays/2025/LearnHowToLearn.vue'

//Journeys
import Austria24 from '../pages/journeys/Austria24.vue'
import Bangkok24 from '../pages/journeys/Bangkok24.vue'
import Budapest24 from '../pages/journeys/Budapest24.vue'
import CeskyKrumlov24 from '../pages/journeys/CeskyKrumlov24.vue'
import Mabul22 from '../pages/journeys/Mabul22.vue'
import Nagoya23 from '../pages/journeys/Nagoya23.vue'
import Singapore23 from '../pages/journeys/Singapore23.vue'

//Albums
import Random16 from '../pages/flashes/Random16.vue'
import Random12 from '../pages/flashes/Random12.vue'
import Shelter from '../pages/flashes/Shelter.vue'


//Projects
import Yolodex from '../pages/projects/Yolodex.vue'
import SutraReader from '../pages/projects/SutraReader.vue'

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
    path: '/changelog',
    name: 'Changelog',
    component: Changelog,
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
  {
    path: '/journeys/austria-24',
    name: 'Austria 24',
    component: Austria24,
  },
  {
    path: '/journeys/bangkok-24',
    name: 'Bangkok 24',
    component: Bangkok24,
  },
  {
    path: '/journeys/budapest-24',
    name: 'Budapest 24',
    component: Budapest24,
  },
  {
    path: '/journeys/cesky-krumlov-24',
    name: 'Cesky Krumlov 24',
    component: CeskyKrumlov24,
  },
  {
    path: '/journeys/pulau-mabul-22',
    name: 'Mabul 22',
    component: Mabul22,
  },
  {
    path: '/journeys/nagoya-23',
    name: 'Nagoya 23',
    component: Nagoya23,
  },
  {
    path: '/journeys/singapura-23',
    name: 'Singapore 23',
    component: Singapore23,
  }, {
    path: '/flashes/random-16',
    name: 'Random 16',
    component: Random16
  }, {
    path: '/flashes/random-12',
    name: 'Random 12',
    component: Random12
  }, {
    path: '/flashes/shelter',
    name: '吳爸爸米克斯庇護所',
    component: Shelter
  }, {
    path: '/projects/yolodex',
    name: 'Yolodex',
    component: Yolodex
  }, {
    path: '/projects/sutra-reader',
    name: 'Sutra-Reader',
    component: SutraReader
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
