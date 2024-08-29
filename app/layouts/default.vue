<script setup lang='ts'>
const collapsed = useState<boolean>('collapsed')
const isOnMobile = useState<boolean>('isOnMobile')
</script>

<template>
  <div class="">
    <ConfirmDialog />
    <Toast />
    <AppSidebar />
    <div id="workspace" :class="[{ collapsed }, { mobile: isOnMobile }]">
      <AppTopbar />
      <div class="m-1 mt-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
