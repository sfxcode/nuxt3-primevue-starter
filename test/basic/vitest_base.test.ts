import { assert, expect, it } from 'vitest'

// Edit an assertion and save to see HMR in action

it('math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2)
  expect(Math.sqrt(144)).toBe(12)
  expect(Math.sqrt(2)).toBe(Math.SQRT2)
})

it('jSON', () => {
  const input = {
    foo: 'hello',
    bar: 'world',
  }

  const output = JSON.stringify(input)

  expect(output).eq('{"foo":"hello","bar":"world"}')
  assert.deepEqual(JSON.parse(output), input, 'matches original')
})

it('array operations', () => {
  const arr = [1, 2, 3, 4]
  expect(arr.length).toBe(4)
  expect(arr.includes(2)).toBe(true)
  expect(arr.map(x => x * 2)).toEqual([2, 4, 6, 8])
})

it('string manipulation', () => {
  const str = 'NuxtPrimeVue'
  expect(str.toLowerCase()).toBe('nuxtprimevue')
  expect(str.replace('Prime', '-')).toBe('Nuxt-Vue')
  expect(str.split('V')).toEqual(['NuxtPrime', 'ue'])
})
