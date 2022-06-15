import Vue from 'vue'
import App from './App.vue'
import mavonEditor from 'mavon-editor'  //引入mavon-editor 就是上面所安装的
Vue.use(mavonEditor)  //让Vue使用mavonEditor

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
