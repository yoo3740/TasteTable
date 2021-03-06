import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Tables from '@/components/Tables'
import Matching from '@/components/Matching'
import New from '@/components/New'
import Mytastes from '@/components/Mytastes'
import CreateTaste from '@/components/CreateTaste'
// import TasteTable from '@/components/TasteTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/my',
      name: 'Mytastes',
      component: Mytastes
    },
    {
      path: '/create_taste',
      name: 'CreateTaste',
      component: CreateTaste
    },
    { path: '/create_taste/:tableId',
      name: 'CreateTaste1',
      component: CreateTaste,
      props: true
    },
    {
      path: '/matching',
      name: 'Matching',
      component: Matching
    },
    {
      path: '/create_table',
      name: 'New',
      component: New
    }
  ]
})
