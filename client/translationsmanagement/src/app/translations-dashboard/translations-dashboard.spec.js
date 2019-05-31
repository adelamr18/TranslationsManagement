import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import translationsDashboard from './translations-dashboard.vue';
import mockAxios from '../shared/mocks/axios';
import SearchBar from '../shared/components/search-bar/search-bar.vue'
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router'
import ImportTranslationPage from '../import-translations/import-translations.vue';



describe('translationsDashboard', () => {

  Vue.use(BootstrapVue);
  const routes = [{
      path: '/',
      component: translationsDashboard,
      name: "TranslationsDashboard"
    },
    {
      path: '/import',
      name: "ImportTranslationPage",
      component: ImportTranslationPage,
    }
  ]
  const router = new VueRouter({
    routes
  })
  router.push({
    name: 'Route name',
    params: [{
        "source": "Hello World",
        "target": "Hola mundo"
      },
      {
        "source": "Hello Everyone",
        "target": "Hola a todos"
      },
      {
        "source": "Hello guys, allow me to introduce the newest team member.",
        "target": "Hola chicos, permítanme presentar al nuevo colega de equipo."
      },
    ]
  });
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const wrapper = mount(translationsDashboard, {
    localVue,
    router
  })
  it('should expect to formulate the body needed if pass-text event is recieved by translationsDashboard component to make a post request for the searched translation', () => {
    wrapper.find(SearchBar).trigger('pass-text');
    expect(wrapper.vm.inputText).toBeTruthy();
  })
  it('should expect to get the searched for results that the user inputs when a post call is made', () => {
    const body = [{
      text: 'Hello'
    }]
    mockAxios.post.mockImplementationOnce((data) =>
      Promise.resolve({
        data: mockData
      }),
    )
    wrapper.vm.sendSearchedTranslations(body);
    expect(wrapper.vm.items).toBeTruthy();
  })
  it('should expect to call getDefaultValues when default-values event is recieved by translationsDashboard component  ', () => {
    var mockData = [{
        "source": "Hello World",
        "target": "Hola mundo"
      },
      {
        "source": "Hello Everyone",
        "target": "Hola a todos"
      },
      {
        "source": "Hello guys, allow me to introduce the newest team member.",
        "target": "Hola chicos, permítanme presentar al nuevo colega de equipo."
      },
      {
        "source": "A dog was running outside",
        "target": "Un perro corría afuera"
      }
    ]
    wrapper.find(SearchBar).trigger('default-values');
    mockAxios.get.mockImplementationOnce((data) =>
      Promise.resolve({
        data: mockData
      }),
    )
    expect(wrapper.vm.items).toBeTruthy();
  })
})
