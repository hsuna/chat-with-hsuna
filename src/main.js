// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Icon from 'vue-svg-icon/Icon.vue';
import MintUI from 'mint-ui'
import App from './App'

import '../static/scss/style.scss'

Vue.config.productionTip = false

Vue.use(VueResource);

Vue.use(MintUI);

Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
