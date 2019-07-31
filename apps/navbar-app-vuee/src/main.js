import Vue from 'vue'
import App from './App.vue'

/*import 'bootstrap';
 import "bootstrap/dist/css/bootstrap.min.css";*/

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import singleSpaVue from 'single-spa-vue';

import { NavbarPlugin } from 'bootstrap-vue'
Vue.use(NavbarPlugin)

Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#navbar-app-vue',
    render: h => h(App)
  }
});


export function bootstrap(props) {
  return vueLifecycles.bootstrap(props);
}

export function mount(props) {
  createDomElement();
  return vueLifecycles.mount(props);
}

export function unmount(props) {
  return vueLifecycles.unmount(props);
}

function createDomElement() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('navbar-app-vue');

  if (!el) {
    el = document.createElement('div');
    el.id = 'navbar-app-vue';
    document.body.appendChild(el);
  }
  return el;
}
