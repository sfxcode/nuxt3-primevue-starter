<script setup lang='ts' xmlns:all="http://www.w3.org/1999/xhtml">
const config = useRuntimeConfig()
</script>

<template>
  <div class="card">
    <h2>UnoCSS</h2>
    <div text-center flex h-full select-none all:transition-400>
      <div ma>
        <div animate-5s text-6xl font-bold fw100 animate-bounce-alt animate-count-infinite>
          unocss
        </div>
        <div text-lg fw300 m1 dark:op30>
          The instant on-demand Atomic CSS engine.
        </div>
        <div

          text-2xl m2 flex justify-center dark:op30
          hover="op80"
        >
          <a

            i-mdi-github-circle text-8xl text-inherit
            href="https://github.com/antfu/unocss"
            target="_blank"
          />
        </div>
      </div>
    </div>
    <div

      fw300 text-center bottom-5 left-0 right-0 dark:op30
    >
      on-demand · instant · fully customizable
    </div>

    <client-only>
      <div v-if="'development' === config.public.APP_MODE">
        <h4 pt-30>
          Inspector
        </h4>
        <div pb-4>
          <span>Only visible in Development mode - click info icon below</span>
        </div>
        <a href="../__unocss" target="_blank">
          <div class="i-mdi-information text-green-600-500-500 text-4xl" />
        </a>
        <article class="prose-truegray text-base pt-4 prose xl:text-xl">
          View, play and analyse rules and setup ...
        </article>
      </div>
    </client-only>
  </div>
</template>

<style scoped></style>
