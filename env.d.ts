/// <reference types: string
declare module '*.css' {
  const classes: { [key: string]: string }
  export default classes
}

interface ImportMetaEnv {
  readonly VITE_API_BASE: string
  readonly VITE_DEBUG_MODE: boolean
  readonly VITE_ENV: string
  readonly VITE_BASE_URL: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_LAUNCH_DATE: string
  readonly VITE_PERSONAL_EMAIL: string
  readonly VITE_PERSONAL_ADDRESS: string
  readonly VITE_PERSONAL_PHONE: string
  readonly VITE_FIRST_NAME: string
  readonly VITE_SURNAME: string
  readonly VITE_HONOURS: string
  readonly VITE_USERNAME: string
  readonly VITE_FULLNAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export declare module 'vue' {
  interface GlobalDirectives {
    /** 
     * Prevent pasting on elements (such as input and all whose `contenteditable` is set to true)
     * 
     * @example
     * If no selector is given, then the element must be an input or have it's `contenteditable` attribute set to `true`
     * ```vue
     * <!-- Does not require a selector as it will auto-map to the input element -->
     * <input type="password" class="..." v-prevent-paste>
     * ```
     * If the directive value is a string, then it must be a valid css selector that selects an element that is an input or has it's `contenteditable` attribute set to `true`
     * ```vue
     * <!-- Requires a selector to map to the input element -->
     * <label for="pass" v-prevent-paste="'#pass'"> <input type="password" class="..." v-prevent-paste> </label>
     * ```
     * Or
     * ```vue
     * <!-- Requires a selector to map to the input element -->
     * <label for="pass" v-prevent-paste="{cssSelector: '#pass'}"> <input type="password" class="..." v-prevent-paste> </label>
     * ```
     */
    vPreventPaste,
    VTooltip,
  }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<NonNullable<unknown>, NonNullable<unknown>, unknown>
  export default component
}
