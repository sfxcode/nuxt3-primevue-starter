<template>
  <div :class='containerClass' @click='onWrapperClick'>
    <AppTopBar @menu-toggle='onMenuToggle'/>
    <div class='layout-sidebar' @click='onSidebarClick'>
      <AppMenu :model='navigation.navigationMenu()' @menuitem-click='onMenuItemClick'/>
    </div>

    <div class='layout-main-container'>
      <div class='layout-main'>
        <slot/>
      </div>
      <AppFooter/>
    </div>

  </div>
</template>

<script setup lang='ts'>
import AppTopBar from '../components/app/AppTopbar.vue';
import AppMenu from '../components/app/AppMenu.vue';
import AppFooter from '../components/app/AppFooter.vue';
import {useToast} from 'primevue/usetoast';
import {usePrimeVue} from 'primevue/config';
import {useNavigationMenu} from "~/composables/navigation";

const layoutMode = ref('static');
const layoutColorMode = ref('light');
const staticMenuInactive = ref(false);
const overlayMenuActive = ref(false);
const mobileMenuActive = ref(false);
const menuClick = ref(false);
const menuActive = ref(false);

const toast = useToast();
const primeVue = usePrimeVue();
const route = useRoute();

const navigation = useNavigationMenu();

watch(() => route,
    async => {
      menuActive.value = false;
      toast.removeAllGroups();
    },
);


function onWrapperClick() {
  if (!menuClick.value) {
    overlayMenuActive.value = false;
    mobileMenuActive.value = false;
  }
  menuClick.value = false;
}


function onMenuToggle() {
  menuClick.value = true;

  if (isDesktop()) {
    if (layoutMode.value === 'overlay') {
      if (mobileMenuActive.value === true) {
        overlayMenuActive.value = true;
      }

      overlayMenuActive.value = !overlayMenuActive.value;
      mobileMenuActive.value = false;
    } else if (layoutMode.value === 'static') {
      staticMenuInactive.value = !staticMenuInactive.value;
    }
  } else {
    mobileMenuActive.value = !mobileMenuActive.value;
  }

}

function onSidebarClick() {
  menuClick.value = true;
}

function onMenuItemClick(event: any) {
  if (event.item && !event.item.items) {
    overlayMenuActive.value = false;
    mobileMenuActive.value = false;
  }
}


function onLayoutChange(mode: string) {
  layoutMode.value = mode;
}

function onLayoutColorChange(mode: string) {
  layoutColorMode.value = mode;
}

function addClass(element: HTMLElement, className: string) {
  if (element.classList)
    element.classList.add(className);
  else
    element.className += ' ' + className;
}


function removeClass(element: HTMLElement, className: string) {
  if (element.classList)
    element.classList.remove(className);
  else
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

function isDesktop() {
  return window.innerWidth >= 992;
}


function isSidebarVisible() {
  if (isDesktop()) {
    if (layoutMode.value === 'static')
      return !staticMenuInactive.value;
    else if (layoutMode.value === 'overlay')
      return overlayMenuActive.value;
  }

  return true;
}

const containerClass = computed(() => ['layout-wrapper', {
  'layout-overlay': layoutMode.value === 'overlay',
  'layout-static': layoutMode.value === 'static',
  'layout-static-sidebar-inactive': staticMenuInactive.value && layoutMode.value === 'static',
  'layout-overlay-sidebar-active': overlayMenuActive.value && layoutMode.value === 'overlay',
  'layout-mobile-sidebar-active': mobileMenuActive.value,
  'p-input-filled': primeVue.config.inputStyle === 'filled',
  'p-ripple-disabled': primeVue.config.ripple === false,
  'layout-theme-light': false,
}]);

function logo() {
  return layoutColorMode.value === 'dark' ? 'images/logo-white.svg' : 'images/logo.svg';
}

onBeforeUpdate(() => {
      if (mobileMenuActive.value)
        addClass(document.body, 'body-overflow-hidden');
      else
        removeClass(document.body, 'body-overflow-hidden');
    },
);


</script>

