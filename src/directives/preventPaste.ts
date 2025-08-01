import { isNil } from 'lodash'
import type { FunctionDirective, ObjectDirective } from 'vue'

export interface PreventPasteDirectiveValue {
  cssSelector?: string
}

function preventPaste(e: ClipboardEvent) {
  e.preventDefault()
  return false
}

function detectDirectiveElementFromValue(
  el: Parameters<typeof mounted>[0],
  value: Parameters<typeof mounted>[1],
) {
  if (!isNil(value) && !isNil(value.value)) {
    if (typeof value.value === 'string') {
      return document.querySelector<HTMLElement>(value.value)
    } else if (typeof value.value === 'object' && 'cssSelector' in value.value) {
      return document.querySelector<HTMLElement>(value.value.cssSelector!)
    } else {
      return el
    }
  }
}

const mounted: FunctionDirective<HTMLElement, PreventPasteDirectiveValue | 'string'> = function (
  el,
  value,
) {
  detectDirectiveElementFromValue(el, value)?.addEventListener('paste', preventPaste)
}
const unmounted: FunctionDirective<HTMLElement, PreventPasteDirectiveValue | 'string'> = function (
  el,
  value,
) {
  detectDirectiveElementFromValue(el, value)?.removeEventListener('paste', preventPaste)
}

export default {
  mounted,
  unmounted,
} satisfies ObjectDirective<HTMLElement, PreventPasteDirectiveValue>
