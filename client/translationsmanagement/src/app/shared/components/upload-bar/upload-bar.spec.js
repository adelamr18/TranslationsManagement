import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import UploadBar from './upload-bar.vue';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

describe('UploadBar', () => {
  Vue.use(BootstrapVue);
  it('should call sendFilesToBackend when a click event occurs when the user clicks on Import button ', () => {
    const wrapper = mount(UploadBar)
    const vm = wrapper.vm;
    const spy = jest.spyOn(vm, 'sendFilesToBackend');
    wrapper.find('#import').trigger('click');
    expect(spy).toHaveBeenCalled();
  })

  it('should show a toast if a file is imported successfully ', () => {
    const submitFile = jest.fn();
    const configureToast = jest.fn();
    const localVue = createLocalVue()
    const wrapper = mount(UploadBar, {
      localVue
    })
    submitFile();
    configureToast();
    const button = wrapper.find('.btn-primary');
    button.trigger('click')
    expect(configureToast).toHaveBeenCalled();
  })












})
