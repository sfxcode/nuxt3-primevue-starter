<script setup lang='ts'>
const { d, t, n, locale, locales, setLocale } = useI18n()
const testDate = new Date()
const testNumber = 42.4242

const availableLocales = computed(() => {
  return locales.value?.filter(l => l.code !== locale.value)
})
</script>

<template>
  <div class="card">
    <h2>Localization</h2>
    Switch Locale to
    <a
      v-for="currentLocale in availableLocales"
      :key="currentLocale.code"
      href="#"
      @click.prevent.stop="setLocale(currentLocale.code)"
    >{{ currentLocale.name }}</a>
    <p>{{ t('save') }}</p>
    <p>{{ d(testDate, 'short') }}</p>
    <p>{{ n(testNumber, 'currency') }}</p>
  </div>
</template>

<style scoped></style>
