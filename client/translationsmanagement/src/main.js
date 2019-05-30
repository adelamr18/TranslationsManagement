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
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



library.add(faFile)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.config.devtools = true;
Vue.use(VueRouter)



const routes = [{
  path: '/',
  component: TranslationsDashboard,
  name:"TranslationsDashboard"
},
{
  path: '/import',
  name:"ImportTranslationPage",
  component: ImportTranslationPage,
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
