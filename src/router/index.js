import Vue from 'vue'
import Router from 'vue-router'
import goods from '../template/goods.vue'
import ratings from '../template/ratings.vue'
import seller from '../template/seller.vue'

Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', redirect: '/goods' },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
