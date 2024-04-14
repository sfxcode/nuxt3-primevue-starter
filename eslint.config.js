// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // Configures for antfu's config
  },
  {
    rules: {
      'vue/no-mutating-props': ['error', {
        shallowOnly: true,
      }],
    },
  },
)
