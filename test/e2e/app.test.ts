import { setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('app', async () => {
  await setup()
  it('should render todo component in page blueprint', async () => {
    const html = await $fetch('/templates/blueprint')
    expect(html).toContain('Work in Progress')
  })
})
