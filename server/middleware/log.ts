import consola from 'consola'

export default defineEventHandler((event) => {
  consola.debug(`New request: ${event.req.url}`)
})
