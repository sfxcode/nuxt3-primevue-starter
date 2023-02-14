# Nuxt 3 + PrimeVue Starter

Build your VUE.js App with Nuxt3. First Class PrimeVUE support. Validation by Formkit.


[![CI](https://github.com/sfxcode/nuxt3-primevue-starter/actions/workflows/main.yml/badge.svg)](https://github.com/sfxcode/nuxt3-primevue-starter/actions/workflows/main.yml)

THX to [antfu / Vitesse Nuxt3](https://github.com/antfu/vitesse-nuxt3) for starter code

## Added Feature Authentification with keycloak
- [Sidebase nuxt-auth](https://sidebase.io/nuxt-auth/) - nuxt-auth is an open source Nuxt module that provides authentication for non-static Nuxt 3 applications.
- preconfigured for keycloak

### I provide a full keycloak demo for test purposes. Please do not use it for production or with sensible data!

https://keycloak.nicedemo.de/
* Admin user: 
 Username: demo 
 Password: demo
* (main branch) Vue user: 
 Username: demouser
 Password: 1234

* (keycloakJs branch) Vue user: 
 Username: publisher
 Password: 1234

### main branch with sidebase/nuxt-auth (buggy)
add the follow .env file to this project:
```
PORT=3000
APP_NAME = "Nuxt 3 Auth Demo"
AUTH_ORIGIN = "http://localhost:3000"
AUTH_CLIENT_ID = "vuejs"
AUTH_SECRET = "vX!#2CqBtT&cxY"
AUTH_URL = "https://keycloak.nicedemo.de/"
AUTH_REALM = "vue"
```
### keycloakJs branch works well. Big thanks to https://github.com/FAIRDataTeam/TrainHandler-client
```
PORT=4200
APP_NAME = "Nuxt 3 Auth Demo"

NUXT_PUBLIC_API_URL=http://localhost:8080
NUXT_PUBLIC_KEYCLOAK_URL="https://keycloak.nicedemo.de"
NUXT_PUBLIC_KEYCLOAK_REALM="webinar"
NUXT_PUBLIC_KEYCLOAK_CLIENT_ID="blog-frontend"
NUXT_PUBLIC_KEYCLOAK_CLIENT_SECRET = "ELQTKN7sMrMJueVTZM9bAVzE4PU0Xc1x"
NUXT_PUBLIC_KEYCLOAK_DISABLED=false
```

## Features

- [Nuxt 3](https://v3.nuxtjs.org) - SSR, ESR, File-based routing, components auto importing, modules, etc.
- Vite - Instant HMR
- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.
- Use icons from any icon sets in Pure CSS, powered by [UnoCSS](https://github.com/antfu/unocss)
- [State Management via Pinia](https://pinia.esm.dev)
- PrimeVue 3.18.x
- Vitest

## Nuxt Modules

- [Pinia](https://pinia.esm.dev/) - intuitive, type safe, light and flexible Store for Vue.
- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [FormKit](https://formkit.com/) - Validation
- [PrimeVue](https://github.com/sfxcode/nuxt-primevue) - PrimeVue Components and Services, PrimeVue Form Validation by [formkit-primevue](https://github.com/sfxcode/formkit-primevue)
- [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine.
- [Content](https://content.nuxtjs.org) - parses .md, .yml, .csv and .json files
- [Histoire](https://histoire.dev/?ref=madewithvuejs.com) (Storybook like Component Viewer)



## Variations

### vite-primevue-starter

Vite Primevue Starter Template

[Github Repository](https://github.com/sfxcode/vite-primevue-starter)

[App on Netlify](https://vite-primevue-starter.netlify.app/)

* Pages, Layouts, and other NUXT like features by VITE Plugins
* UnoCSS
* Markdown
* CachedPiniaStore
* i18n
* Validation
* ...

## Project setup and usage

Install node:

**Latest node LTS version required (16)**
Use node manager like **nvm** to install.

Install pnpm:
[https://pnpm.io/installation](https://pnpm.io/installation)

Install dependencies:

```
pnpm install
```

Run development server:

```
pnpm dev
```

Vitest test runner:

```
pnpm test:unit
```

Build:

```
pnpm build
```

Start Production build:

```
pnpm start
```

## Tools

I use IntelliJ with VUE.js plugin.

## Supporters

JetBrains is supporting this open source project with:

[![Intellij IDEA](http://www.jetbrains.com/img/logos/logo_intellij_idea.png)](http://www.jetbrains.com/idea/)
