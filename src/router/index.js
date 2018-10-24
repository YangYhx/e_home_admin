import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=> import('@/views/login/login'),
    },
    {
      path:'/admin',
      name:'admin',
      component:()=>import('@/views/home/home'),
      redirect:'/admin/index',
      children:[
        {
          path:'index',
          name:'index',
          component:()=> import('@/views/home/index')
        },
        {
          path:'adduser',
          name:'adduser',
          component:()=> import('@/views/adminuser/adduser')
        },
        {
          path:'userlist',
          name:'userlist',
          component: ()=> import('@/views/adminuser/userlist')
        },
        {
          path:'addnews',
          name:'addnews',
          component: ()=> import('@/views/news/addnews')
        },
        {
          path:'newslist',
          name:'newslist',
          component: ()=> import('@/views/news/newslist')
        }
      ]
    }
  ]
})
