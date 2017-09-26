import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
//const home01 = r => require.ensure([], () => r(require('@/components/page/home01')), 'home01');
import home01 from '@/components/page/home01'
import home02 from '@/components/page/home02'
import home03 from '@/components/page/home03'
import home04 from '@/components/page/home04'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {path:'',component:home01},
        {path:'home01/:num',component:home01},
        {path:'home02',component:home02},
        {path:'home03',component:home03},
        {path:'home04',component:home04},
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: '/Contact',
      component: Contact
    }
  ]
})
