import Vue from 'vue'
import App from './App.vue'
import ColorDirective from "./color";

// export const eventEmmiter = new Vue()

Vue.directive('colored', ColorDirective)

new Vue({
  el: '#app',
  render: h => h(App)
})


