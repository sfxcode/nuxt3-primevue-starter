import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ExternalLink from '../../app/components/ExternalLink.vue'

describe('externalLink', () => {
  it('renders link with correct text and href', () => {
    const wrapper = mount(ExternalLink, {
      props: {
        text: 'Nuxt',
        href: 'https://nuxt.com',
      },
    })
    const a = wrapper.find('a')
    expect(a.exists()).toBe(true)
    expect(a.text()).toBe('Nuxt')
    expect(a.attributes('href')).toBe('https://nuxt.com')
    expect(a.attributes('target')).toBe('_blank')
  })

  it('renders default props', () => {
    const wrapper = mount(ExternalLink)
    const a = wrapper.find('a')
    expect(a.text()).toBe('')
    expect(a.attributes('href')).toBe('#')
  })
})
