import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import AppPosts from './components/AppPosts'
import SinglePost from './components/SinglePost'
import AddPost from './components/AddPost'





Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path:'/', redirect:'/posts'},
  {path:'/posts', component: AppPosts},
  {path:'/posts/:id', component: SinglePost, name:'single-post',props:true},
  {path:'/add', component: AddPost},
  {path:'/edit/:id', component: AddPost, name: 'edit'}

]

const router = new VueRouter({
  routes: routes,
  mode:'history'
  
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')