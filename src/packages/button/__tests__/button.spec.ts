import { defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import Button from '../../button/button.vue'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(Button, {
      props: {type: 'primary'}
    })
    expect(wrapper.classes()).toContain('w-button--primary')
  })
  it ('icon', () => {
    const wrapper = mount(Button, {
      props: {icon: 'w-icon-search'}
    })
    expect(wrapper.find('.w-icon-search').isVisible()).toBe(true)
  })
  it ('nativeType', () => {
    const wrapper = mount(Button, {
      props: {nativeType: 'submit'}
    })
    expect(wrapper.attributes('type')).toBe('submit')
  })
  it ('loading', () => {
    const wrapper = mount(Button, {
      props: {loading: true}
    })
    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.find('.w-icon-loading').isVisible()).toBe(true)
  })
  it ('disabled', async () => {
    const wrapper = mount(Button,  {
      props: {disabled: true}
    })
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
  it ('size', () => {
    const wrapper = mount(Button, {
      props: {size: 'medium'}
    })
    expect(wrapper.classes()).toContain('w-button--medium')
  })
  it ('plain', () => {
    const wrapper = mount(Button, {
      props: {plain: true}
    })
    expect(wrapper.classes()).toContain('is-plain')
  })
  it ('round', () => {
    const wrapper = mount(Button, {
      props: {round: true}
    })
    expect(wrapper.classes()).toContain('is-round')
  })
  it ('circle', () => {
    const wrapper = mount(Button, {
      props: {circle: true}
    })
    expect(wrapper.classes()).toContain('is-circle')
  })
  it ('click', async () => {
    const wrapper = mount(Button, {
      props: {circle: true}
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  it ('click inside', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: '<span class="inner-slot"></span>'
      }
    })
    await wrapper.find('.inner-slot').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  it ('loading implies disabled', async () =>{
    const wrapper = mount(Button, {
      props: {
        loading: true
      }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
