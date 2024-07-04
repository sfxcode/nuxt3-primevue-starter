// formkit.config.ts
import type { DefaultConfigOptions } from '@formkit/vue'
import { defu } from 'defu'
import { de, en } from '@formkit/i18n'
import { createAutoAnimatePlugin } from '@formkit/addons'
import { primeInputs } from '@sfxcode/formkit-primevue'

const config: DefaultConfigOptions = {
  locales: { de, en },
  // Define the active locale
  locale: 'de',
  inputs: defu(primeInputs),

  plugins: [
    createAutoAnimatePlugin(
      {
        /* optional AutoAnimate config */
        // default:
        duration: 250,
        easing: 'ease-in-out',
      },
      {
        /* optional animation targets object */
        // default:
        global: ['outer', 'inner'],
        form: ['form'],
        repeater: ['items'],
      },
    ),
  ],
}

export default config
