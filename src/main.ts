import './assets/styles/state.css'

// Vue
import { createApp } from 'vue'

// External libs
import { createHead } from '@unhead/vue/client'
import { createPinia } from 'pinia'

// Primevue
import { definePreset } from '@primeuix/themes'
import BadgeDirective from 'primevue/badgedirective'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import FocusTrap from "primevue/focustrap"
import KeyFilter from "primevue/keyfilter"
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'
import Lara from '@primeuix/themes/lara'
import type { Preset } from '@primeuix/themes/types'

// constants
import { env } from './modules/libs/keys.ts'

// Custom components
import {aura} from './assets/themes/primevue'
import App from './App.vue'
import router from './router'
import PreventPaste from './directives/preventPaste.ts'


// Custom libs

const app = createApp(App)

const preset = definePreset(Lara, aura as Preset)
const head = createHead()

app.provide(env, import.meta.env)

app.use(createPinia())
app.use(router)
app.use(head)
app.use(PrimeVue, {
    theme: {
        preset,
        darkModeSelector: 'class',
        cssLayer: false,
    },
})
app.use(ToastService)
app.use(ConfirmationService)
app.directive("tooltip", Tooltip)
app.directive("badge", BadgeDirective)
app.directive("keyfilter", KeyFilter)
app.directive("focustrap", FocusTrap)
app.directive("preventPaste", PreventPaste)

app.mount('#app')
