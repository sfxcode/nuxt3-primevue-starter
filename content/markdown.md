---
title: 'Nuxt Content'
description: 'Markdown Sample Page'
author: 'Tom'
---

Hello World Form **Nuxt Content V2**

### Navigation

[Component Sample](/cms/component)

### Code 

```typescript
import { useDataStore, useThemeStore } from '@/stores'
const themeStore = useThemeStore()
const dataStore = useDataStore()

onMounted(async () => {
  await dataStore.initData()
})
```

### List

1. Vue
2. Nuxt
3. PrimeVue
4. ...

### Table

| Key      | Type      | Description     |
|:---------|:----------|:----------------|
| 1        | Wonderful | Table           |
| 2        | Complete  | Data            |
| 3        | Cool      | Website         |



