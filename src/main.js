// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Welcome from "./components/Welcome.vue"
import PICS from "./components/Pics.vue"
import SHORTPICS from "./components/ShortPics.vue"
import MEDIUMPICS from "./components/MediumPics.vue"
import LONGPICS from "./components/LongPics.vue"
import MAXPICS from "./components/MaxPics.vue"
import RESERVATION from "./components/Reservation.vue"
import QNA from "./components/Qna.vue"
import ABOUT from "./components/About.vue"

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueSidebarMenu);
Vue.use(BootstrapVue)

Vue.config.productionTip = false


const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: Welcome
    },
    {
      path: '/pics/all',
      name: 'PICS',
      component: PICS
    },
    {
      path: '/pics/short',
      name: 'SHORTPICS',
      component: SHORTPICS
    },
    {
      path: '/pics/medium',
      name: 'MEDIUMPICS',
      component: MEDIUMPICS
    },
    {
      path: '/pics/long',
      name: 'LONGPICS',
      component: LONGPICS
    },
    {
      path: '/pics/max',
      name: 'MAXPICS',
      component: MAXPICS
    },
    {
      path: '/reservation',
      name: 'RESERVATION',
      component: RESERVATION
    },
    {
      path: '/qna',
      name: 'QNA',
      component: QNA
    },
    {
      path: '/about',
      name: 'About',
      component: ABOUT
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
