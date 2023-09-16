<script setup lang='ts' xmlns:all="http://www.w3.org/1999/xhtml">
const config = useRuntimeConfig()

</script>

<template>
  <div class="card">
    <h5>UnoCSS</h5>
    <div h-full text-center flex select-none all:transition-400>
      <div ma>
        <div text-5xl fw100 animate-bounce-alt animate-count-infinite animate-5s>
          unocss
        </div>
        <div op30 text-lg fw300 m1>
          The instant on-demand Atomic CSS engine.
        </div>
        <div
          m2
          flex
          justify-center
          text-2xl
          op30
          hover="op80"
        >
          <a
            i-mdi-github-circle
            text-inherit
            href="https://github.com/antfu/unocss"
            target="_blank"
          />
        </div>
      </div>
    </div>
    <div
      bottom-5
      right-0
      left-0
      text-center
      op30
      fw300
    >
      on-demand · instant · fully customizable
    </div>

    <client-only>
      <div v-if="'development' === config.public['APP_MODE']">
        <h4 pt-10>
          Inspector
        </h4>
        <div pb-4>
          <span>Only visible in Development mode - click info icon below</span>
        </div>
        <a href="../__unocss" target="_blank">
          <div class="i-mdi-information text-4xl text-green-600-500-500" />
        </a>
        <article class="pt-4 text-base prose prose-truegray xl:text-xl">
          View, play and analyse rules and setup ...
        </article>
      </div>
    </client-only>
  </div>
</template>

<style scoped></style>
