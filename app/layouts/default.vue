<script setup lang='ts'>
const collapsed = useState<boolean>('collapsed')
const isOnMobile = useState<boolean>('isOnMobile')
</script>

<template>
  <div class="">
    <AppSidebar />
    <div id="workspace" :class="[{ collapsed }, { mobile: isOnMobile }]">
      <AppTopbar />
      <div class="m-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
