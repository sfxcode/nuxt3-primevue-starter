export function setupVue3({ app }) {
  app.provide('test', 'hello')
  // app.use(...)
  const externalScript = document.createElement('script')
  externalScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/@unocss/runtime/attributify.global.js')
  document.head.appendChild(externalScript)
}
