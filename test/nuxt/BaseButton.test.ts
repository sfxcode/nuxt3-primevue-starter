import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BaseButton from '../../app/components/BaseButton.vue'

describe('baseButton', () => {
  it('renders slot content', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Click me',
      },
    })
    expect(wrapper.text()).toContain('Click me')
  })

  it('applies color and size classes', () => {
    const wrapper = mount(BaseButton, {
      props: {
        color: 'green',
        size: 'big',
      },
      slots: {
        default: 'Button',
      },
    })
    expect(wrapper.classes()).toContain('btn-color-green')
    expect(wrapper.classes()).toContain('btn-size-big')
  })

  it('emits click event', async () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Click',
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
