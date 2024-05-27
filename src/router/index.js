import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/HomePage'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/longin/LoginPage.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: () => import('@/views/home/HomePage.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/cookall',
      name: 'cookall',
      component: () => import('@/views/cookall/cookAll.vue'),
      meta: {
        title: '菜谱大全'
      }
    },
    {
      path: '/hotpage',
      name: 'hotpage',
      component: () => import('@/views/hot/onedayPage.vue'),
      meta: {
        title: '热门'
      }
    },
    {
      path: '/askquestion',
      name: 'askquestion',
      component: () => import('@/views/answers/askQuestion.vue'),
      meta: {
        title: '问答'
      }
    },
    {
      path: '/questionpage',
      name: 'questionpage',
      component: () => import('@/views/answers/questionListPage.vue'),
      meta: {
        title: '问题'
      }
    },
    {
      path: '/mydata',
      name: 'mydata',
      component: () => import('@/views/mydata/mydataPage.vue'),
      meta: {
        title: '我的'
      }
    },
    {
      path:'/comment',
      name:'comment',
      component:()=>import('@/views/answers/commentList.vue'),
      meta: {
        title: '评论'
      }
    },
    {
      path:'/shareList',
      name:'shareList',
      component:()=>import('@/views/share/shareList.vue'),
      meta: {
        title: '分享'
      } 
    },
    {
      path:'/shareOrder',
      name:'shareOrder',
      component:()=>import('@/views/share/shareOrder.vue'),
      meta: {
        title: '发布分享'
      } 
    },
    {
      path:'/onedayPage',
      name:'onedayPage',
      component:()=>import('@/views/hot/onedayPage.vue'),
      meta: {
        title: '一天'
      } 
    },
    {
      path:'/triduumPage',
      name:'triduumPage',
      component:()=>import('@/views/hot/triduumPage.vue'),
      meta: {
        title: '三天'
      } 
    },
    {
      path:'/hebdomadPage',
      name:'hebdomadPage',
      component:()=>import('@/views/hot/hebdomadPage.vue'),
      meta: {
        title: '七天'
      } 
    },
    {
      path:'/hotAdmin',
      name:'hotAdmin',
      component:()=>import('@/views/administrator/hotAdmin.vue'),
      meta: {
        title: '管理热门'
      } 
    },
    {
      path:'/adminHome',
      name:'adminHome',
      component:()=>import('@/views/administrator/adminHome.vue'),
      meta: {
        title: '管理员首页'
      } 
    },
    {
      path:'/adminLogin',
      name:'adminLogin',
      component:()=>import('@/views/administrator/adminLogin.vue'),
      meta: {
        title: '管理员登录'
      } 
    },
    {
      path:'/adminAnswer',
      name:'adminAnswer',
      component:()=>import('@/views/administrator/adminAnswer.vue'),
      meta: {
        title: '管理问答'
      } 
    },
    {
      path:'/adminShare',
      name:'adminShare',
      component:()=>import('@/views/administrator/adminShare.vue'),
      meta: {
        title: '管理分享'
      } 
    },
    {
      path:'/adminUser',
      name:'adminUser',
      component:()=>import('@/views/administrator/adminUser.vue'),
      meta: {
        title: '管理用户'
      } 
    },
  ]
})


//路由守卫  
const whitePahtn = ['/login', '/register']  //白名单
router.beforeEach((to, from, next) => {
  document.title = to.meta.title  //跳页面时浏览器标签
  if (!whitePahtn.includes(to.path)) {   //想去详情页
    if (!localStorage.getItem('user')) { //没登录
      router.push('/login')
      return
    }
    next()
    return
  }
  next()
})

export default router
