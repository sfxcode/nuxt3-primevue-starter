import { defineNuxtPlugin } from "#app";
import  { createLogger } from 'vue-logger-plugin';



export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const logger = createLogger({
    enabled: true,
    level: config.LOG_LEVEL,
  });

  const app = nuxtApp.vueApp
  app.use(logger);
});
