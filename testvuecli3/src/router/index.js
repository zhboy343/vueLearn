import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import HomeComponent from '../components/Home.vue'
import UserComponent from '../components/User.vue'

// 懒加载
const HomeNews1 = () => import('../components/HomeNew1.vue');
const HomeNews2 = () => import('../components/HomeNew2.vue');
const About = () => import('../components/About.vue');
const Profile = () => import('../components/Profile.vue');

// 1.通过Vue.use() 安装路由插件
Vue.use(VueRouter)

const routes = [
  // 配置默认首页
  {
    path: '/',  // / 可加可不加
    // 重定向
    redirect: '/home'
  },
  // 配置Home映射关系
  {
    path: '/home',
    component: HomeComponent,
    // 元数据--在下全局导航守卫中使用
    meta: {
      title: '首页'
    },
    // 嵌套路由
    children: [
      // 默认显示
      {
        path: '/',  // / 可加可不加
        // 重定向
        redirect: 'news1'
      },
      {
        path: 'news1',  // 子路由可以不在前加 /
        component: HomeNews1,
        meta: {
          title: '新闻1'
        },
      },
      {
        path: 'news2',
        component: HomeNews2,
        meta: {
          title: '新闻2'
        },
      }
    ]
  }, 
  // 配置About映射关系--懒加载,需要展示该页面时再加载(使用打包时会单独打包此页面)
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    // 路由独享的守卫
    beforeEnter: (to, form, next) => {
      console.log('sssssss');
      next()
    }
  },
  // 配置User映射关系(动态路由)
  {
    path: '/user/:userId',
    component: UserComponent,
    meta: {
      title: '动态路由'
    },
  },
  // 路由参数传递(query)
  {
    path: '/Profile',
    component: Profile,
    meta: {
      title: '路由参数传递'
    },
  }

]

// 2.创建路由对象
const router = new VueRouter({
  // 设置路由模式,默认是hash模式
  // hash模式路径为  /#/home
  // history模式路径为(没有#)  /home
  mode: 'history',
  // router-link被选中时 添加上的标识class  (router-link标签)
  linkActiveClass: 'active',
  // base: process.env.BASE_URL,
  // 3.配置路由和组件之间的应用关系
  routes
})

// 全局导航守卫(前置首位-在路由跳转前调用)---监听路由的跳转
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  // 实现功能，路由跳转时，修改页面title
  document.title = to.meta.title
  next()
})
// 全局导航守卫(后置钩子-在路由跳转后调用)
router.afterEach((to, from) => {
  console.log('from:' + from.meta.title + '  to:' + to.meta.title)
})

// 4.导出路由对象,在mian.js的Vue中使用
export default router
