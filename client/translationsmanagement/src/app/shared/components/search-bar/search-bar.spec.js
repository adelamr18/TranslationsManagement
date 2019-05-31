import {
  mount
} from '@vue/test-utils'
import SearchBar from './search-bar.vue'

describe('SearchBar', () => {
  it('should expect that if user leaves the search area blank a flag will be set to true to get default translations', () => {
    const wrapper = mount(SearchBar)
    const vm = wrapper.vm;
    wrapper.find('input').trigger('change')
    expect(vm.getDefaultValues).toBeTruthy();
  })
  it('should expect that if the  user searches for a translation then the default values of translations will not be fetched ', () => {
    const wrapper = mount(SearchBar)
    let vm = wrapper.vm;
    vm.inputText = 'Hello';
    wrapper.find('input').trigger('change')
    expect(vm.getDefaultValues).toBeFalsy();
  })
})
