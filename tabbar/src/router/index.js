import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')

// 安装插件
Vue.use(VueRouter)

// 创建路由
const routes = [
  // 配置默认首页
  {
    path: '/',  // / 可加可不加
    // 重定向
    redirect: '/home'
  },
  // Home
  {
    path: '/home',
    component: Home
  },
  // Cart
  {
    path: '/shopCart',
    component: Cart
  },
  // Category
  {
    path: '/category',
    component: Category
  },
  // Profile
  {
    path: '/profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'// history模式路径前没有#号
})

export default router
