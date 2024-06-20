// @vitest-environment nuxt
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import ToDo from '../../app/components/ToDo.vue'

describe('todo', () => {
  it('component can be mounted', async () => {
    const component = await mountSuspended(ToDo)
    expect(component.html()).toContain('TODO')
  })
})
