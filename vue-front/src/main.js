import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//window.$ = window.jQuery = require('jquery')
// import "jquery";
// import "jquery-confirm";
// const $ = require('jquery');
// window.$ = $;
// require('jquery-confirm');

new Vue({
  render: h => h(App)
}).$mount('#app')

// Vue.use({
//   install: function(Vue){
//       Vue.prototype.$ = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
//   }
// })