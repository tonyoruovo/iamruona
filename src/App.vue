<script setup lang="ts">

import { computed, onBeforeUnmount, onMounted, provide, reactive } from 'vue';

import { useRoute } from 'vue-router';

import { debounce, isNil } from 'lodash';
import { SchemeId } from './modules/enums/ui.enum';
import { darkQuery, dimensionInjectionKey, schemeInjectionKey } from './modules/libs/keys';

import { useRouterStore } from './stores/router';

import type { ColorScheme, UIDimension } from './modules/dtos/ui.dto';
import FooterView from './views/footer/FooterView.vue';
import HeaderView from './views/header/HeaderView.vue';

const router = useRoute()
// Prevent garbage collection and provides global access
useRouterStore()
useColorScheme()
useDimension()

const navIsVisible = computed<boolean | undefined>(() => router.meta.nav)
const footerIsVisible = computed<boolean | undefined>(() => router.meta.footer)

function useColorScheme() {
  const scheme = reactive<ColorScheme>({mode: !isNil(window.matchMedia) && window.matchMedia(darkQuery).matches ? SchemeId.DARK : SchemeId.LIGHT})
  const update = debounce(handler, 100)

  provide<ColorScheme>(schemeInjectionKey, scheme)
  
  function handler(me: MediaQueryListEvent) {
    if (me.matches) {
      document.documentElement.classList.add(SchemeId.DARK)
      scheme.mode = SchemeId.DARK
    } else {
      document.documentElement.classList.remove(SchemeId.DARK)
      scheme.mode = SchemeId.LIGHT
    }
  }
  function start() { if (!isNil(window.matchMedia(darkQuery))) window.matchMedia(darkQuery).addEventListener('change', update) }
  function stop() {
    try {
      window.matchMedia(darkQuery).removeEventListener('change', update);
    } catch (err) {
      console.error(err);
    }
  }

  onMounted(start)
  onBeforeUnmount(stop)

  return { scheme, forceUpdate: update }
}

function useDimension() {
  const dimension = reactive<UIDimension>({ width: window.innerWidth, height: window.innerHeight })
  const update = debounce(handler, 100);

  provide(dimensionInjectionKey, dimension)

  function handler(ui: UIEvent) {
    dimension.width = (ui.currentTarget as Window).innerWidth;
    dimension.height = (ui.currentTarget as Window).innerHeight;
  }

  function start() {
    window.addEventListener('resize', update)
  }
  function stop() {
    window.removeEventListener('resize', update)
  }
  
  onMounted(start)
  onBeforeUnmount(stop)

  return { dimension, forceUpdate: update }
}

</script>

<template>
    <header-view :visible="navIsVisible" />
    <router-view />
    <footer-view :visible="footerIsVisible" />
</template>
