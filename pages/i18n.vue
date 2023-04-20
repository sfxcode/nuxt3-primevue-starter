<script setup lang='ts'>
const { d, t, n, locale, locales, setLocale } = useI18n()
const testDate = new Date()
const testNumber = 42.4242

const availableLocales = computed(() => {
  return locales.value?.filter(i => i.code !== locale.value)
})

</script>

<template>
  <div class="card">
    <h3>Localization</h3>
    Switch Locale to
    <a
      v-for="locale in availableLocales"
      :key="locale.code"
      href="#"
      @click.prevent.stop="setLocale(locale.code)"
    >{{ locale.name }}</a>
    <p>{{ t('save') }}</p>
    <p>{{ d(testDate, 'short') }}</p>
    <p>{{ n(testNumber, 'currency') }}</p>
  </div>
</template>

<style scoped></style>
