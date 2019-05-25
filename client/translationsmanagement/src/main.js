// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import TranslationsDashboard from '../src/app/translations-dashboard/translations-dashboard.vue';
import ImportTranslationPage from '../src/app/import-translations/import-translations.vue';




Vue.use(BootstrapVue)
Vue.config.devtools = true;
Vue.use(VueRouter)


const routes = [{
  path: '/',
  component: TranslationsDashboard
},
{
  path: '/import',
  component: ImportTranslationPage
}
]
const router = new VueRouter({
  routes,
  mode:'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
