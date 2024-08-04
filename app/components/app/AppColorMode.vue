<script setup lang="ts">
const mode = useColorMode({
  emitAuto: true,
  modes: {
    contrast: 'dark contrast',
    cafe: 'cafe',
  },
})

const modes = ['dark', 'light', 'auto']
// const allModes = [...modes, 'cafe', 'contrast']

const { state, next } = useCycleList(modes, { initialValue: mode })

watchEffect(() => mode.value = state.value)
</script>

<template>
  <div>
    <client-only>
      <Button @click="next()">
        <i v-if="mode === 'dark'" i-carbon-moon inline-block align-middle class="align-middle" />
        <i v-if="mode === 'light'" i-carbon-sun inline-block align-middle class="align-middle" />
        <i v-if="mode === 'cafe'" i-carbon-cafe inline-block align-middle class="align-middle" />
        <i v-if="mode === 'contrast'" i-carbon-contrast inline-block align-middle class="align-middle" />
        <i v-if="mode === 'auto'" i-carbon-laptop inline-block align-middle class="align-middle" />
        <span class="ml-2 capitalize">{{ mode }}</span>
      </Button>
    </client-only>
  </div>
</template>

<style>
html.cafe {
    filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
}
html.contrast {
    filter: contrast(2);
}
</style>
