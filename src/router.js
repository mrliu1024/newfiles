// 创建路由对象 //这是抽离组件 的路由
import VueRouter from 'vue-router'  // 导入路由

// 导入自己的路由文件,  写下面的path路由规则    
import home  from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar  from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
// import  后面是 路由名字 from 后面是地址;  
// path 后面是 router-link to 的路径, 路由规则 , path 
import newlist from './components/news/newslist.vue'
import newinfo from './components/news/newsinfo.vue'

var router = new VueRouter({
  routes: [   //四个 路由规则的书写
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/member', component: member },
    { path: '/shopcar', component: shopcar },
    { path: '/search', component: search },
    {path:'/home/newslist',component:newlist},
    {path:'/home/newsinfo/:id',component:newinfo},
    
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router