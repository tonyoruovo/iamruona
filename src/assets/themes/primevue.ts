import type { LaraBaseDesignTokens, LaraBaseTokenSections } from '@primeuix/themes/lara/base'
import type {
  MaterialBaseDesignTokens,
  MaterialBaseTokenSections,
} from '@primeuix/themes/material/base'
import type { AuraBaseDesignTokens, AuraBaseTokenSections } from '@primeuix/themes/aura/base'
import type { NoraBaseDesignTokens, NoraBaseTokenSections } from '@primeuix/themes/nora/base'
import {
  accordion,
  avatar,
  button,
  badge,
  card,
  carousel,
  confirmDialog,
  confirmPopup,
  dialog,
  dataTable,
  datePicker,
  drawer,
  divider,
  fileUpload,
  iconField,
  inputGroup,
  inputText,
  menu,
  menuBar,
  megaMenu,
  multiSelect,
  panel,
  password,
  popOver,
  progressBar,
  progressSpinner,
  radioButton,
  scrollPanel,
  select,
  selectButton,
  slider,
  splitter,
  skeleton,
  stepper,
  tabs,
  tag,
  textArea,
  timeline,
  toggleButton,
  toggleSwitch,
  tooltip,
  type PrimeComponentDesignTokens,
} from './designTokens'
import type { ComponentsDesignTokens, PaletteDesignToken } from '@primeuix/themes/types'

export type PrimeColor = {
  50?: string
  100?: string
  200?: string
  300?: string
  400?: string
  500?: string
  600?: string
  700?: string
  800?: string
  900?: string
  950?: string
}

export type PrimePrimaryControl = {
  color: string
  contrastColor: string
  hoverColor: string
  activeColor: string
  mutedColor: string
  hoverMutedColor: string
}
export type PrimeColorScheme = {
  surface: PaletteDesignToken
  primary: Partial<Omit<PrimePrimaryControl, 'mutedColor' | 'hoverMutedColor'>>
  text: Partial<Omit<PrimePrimaryControl, 'contrastColor' | 'activeColor'>>
  highlight: {
    background?: string
    focusBackground?: string
    color?: string
    focusColor?: string
  }
  mask: {
    background?: string
    color?: string
  }
  formField?: {
    background?: string
    disabledBackground?: string
    filledBackground?: string
    filledHoverBackground?: string
    filledFocusBackground?: string
    borderColor?: string
    hoverBorderColor?: string
    focusBorderColor?: string
    invalidBorderColor?: string
    color?: string
    disabledColor?: string
    placeholderColor?: string
    invalidPlaceholderColor?: string
    floatLabelColor?: string
    floatLabelFocusColor?: string
    floatLabelActiveColor?: string
    floatLabelInvalidColor?: string
    iconColor?: string
    shadow?: string
  }
  content?: {
    background?: string
    hoverBackground?: string
    borderColor?: string
    color?: string
    hoverColor?: string
  }
  overlay?: {
    select?: {
      background?: string
      borderColor?: string
      color?: string
    }
    popover?: {
      background?: string
      borderColor?: string
      color?: string
    }
    modal?: {
      background?: string
      borderColor?: string
      color?: string
    }
  }
  list?: {
    option?: {
      focusBackground?: string
      selectedBackground?: string
      selectedFocusBackground?: string
      color?: string
      focusColor?: string
      selectedColor?: string
      selectedFocusColor?: string
      icon?: {
        color?: string
        focusColor?: string
      }
    }
    optionGroup?: {
      background?: string
      color?: string
    }
  }
  navigation?: {
    item?: {
      focusBackground?: string
      activeBackground?: string
      color?: string
      focusColor?: string
      activeColor?: string
      icon?: {
        color?: string
        focusColor?: string
        activeColor?: string
      }
    }
    submenuLabel?: {
      background?: string
      color?: string
    }
    submenuIcon?: {
      color?: string
      focusColor?: string
      activeColor?: string
    }
  }
}
export type AuraSemanticColorScheme = AuraBaseTokenSections.Semantic['colorScheme']
export type PrimeLight = Partial<PrimeColorScheme>
export type PrimeDark = Partial<PrimeColorScheme>

const components = {
  accordion,
  avatar,
  button,
  badge,
  card,
  carousel,
  confirmdialog: confirmDialog,
  confirmpopup: confirmPopup,
  dialog,
  datatable: dataTable,
  datepicker: datePicker,
  drawer,
  divider,
  fileupload: fileUpload,
  iconfield: iconField,
  inputgroup: inputGroup,
  inputtext: inputText,
  menu,
  menubar: menuBar,
  megamenu: megaMenu,
  multiselect: multiSelect,
  panel,
  password,
  popover: popOver,
  progressbar: progressBar,
  progressspinner: progressSpinner,
  radiobutton: radioButton,
  scrollpanel: scrollPanel,
  select,
  selectbutton: selectButton,
  slider,
  splitter,
  skeleton,
  stepper,
  tabs,
  tag,
  textarea: textArea,
  timeline,
  togglebutton: toggleButton,
  toggleswitch: toggleSwitch,
  tooltip,
} as Required<ComponentsDesignTokens>
const light: PrimeLight = {
  primary: {
    color: 'var(--color-primary)',
    contrastColor: 'var(--color-accent)',
    hoverColor: 'color-mix(in oklab, var(--color-primary) 80%, transparent)',
    activeColor: 'color-mix(in oklab, var(--color-accent) 20%, transparent)',
  },
  highlight: {
    background: 'color-mix(in oklab, var(--color-primary) 50%, transparent)',
    focusBackground: 'color-mix(in oklab, var(--color-primary) 40%, transparent)',
    color: 'var(--color-glyph)',
    focusColor: 'var(--color-glyph)',
  },
  mask: {
    background: 'color-mix(in oklab, var(--color-glyph) 10%, transparent)',
    color: 'var(--color-background)',
  },
  formField: {
    background: 'var(--color-surface)',
    borderColor: 'color-mix(in oklab, var(--color-glyph) 60%, transparent)',
    color: 'var(--color-glyph)',
    disabledBackground: 'color-mix(in oklab, var(--color-surface) 15%, transparent)',
    disabledColor: 'color-mix(in oklab, var(--color-glyph) 20%, transparent)',
    filledBackground: 'color-mix(in oklab, var(--color-primary) 25%, transparent)',
    filledHoverBackground: 'color-mix(in oklab, var(--color-primary) 30%, transparent)',
    filledFocusBackground: 'color-mix(in oklab, var(--color-primary) 35%, transparent)',
    focusBorderColor: 'color-mix(in oklab, var(--color-primary) 80%, transparent)',
    invalidBorderColor: 'color-mix(in oklab, var(--color-error) 60%, transparent)',
    placeholderColor: 'color-mix(in oklab, var(--color-glyph) 70%, transparent)',
    shadow: 'color-mix(in oklab, var(--color-glyph) 5%, transparent)',
  },
  text: {
    color: 'var(--color-glyph)',
    hoverColor: 'color-mix(in oklab, var(--color-glyph) 90%, transparent)',
    mutedColor: 'color-mix(in oklab, var(--color-glyph) 50%, transparent)',
    hoverMutedColor: 'color-mix(in oklab, var(--color-glyph) 40%, transparent)',
  },
  content: {
    background: 'color-mix(in oklab, var(--color-surface) 60%, white)',
    borderColor: 'color-mix(in oklab, var(--color-glyph) 60%, transparent)',
    color: 'var(--color-glyph)',
    hoverBackground: 'color-mix(in oklab, var(--color-surface) 15%, transparent)',
    hoverColor: 'var(--color-glyph)',
  },
  navigation: {
    item: {
      focusBackground: 'color-mix(in oklab, var(--color-primary) 20%, transparent)',
      activeBackground: 'color-mix(in oklab, var(--color-primary) 30%, transparent)',
      color: 'var(--color-glyph)',
      focusColor: 'var(--color-glyph)',
      activeColor: 'var(--color-glyph)',
    }
  }
}
const dark: PrimeDark = light
const colorScheme: AuraSemanticColorScheme = {
  dark,
  light,
}

const auraPrimitive: AuraBaseDesignTokens['primitive'] = {}
const auraSemantic: AuraBaseDesignTokens['semantic'] = {
  colorScheme,
}
const auraDesignToken: AuraBaseDesignTokens & { components: PrimeComponentDesignTokens } = {
  components,
  primitive: auraPrimitive,
  semantic: auraSemantic,
}

export type LaraSemanticColorScheme = LaraBaseTokenSections.Semantic['colorScheme']

const laraPrimitive: LaraBaseDesignTokens['primitive'] = {}
const laraSemantic: LaraBaseDesignTokens['semantic'] = {
  colorScheme,
}
const laraDesignToken: LaraBaseDesignTokens & { components: PrimeComponentDesignTokens } = {
  components,
  primitive: laraPrimitive,
  semantic: laraSemantic,
}

export type NoraSemanticColorScheme = NoraBaseTokenSections.Semantic['colorScheme']

const noraPrimitive: NoraBaseDesignTokens['primitive'] = {}
const noraSemantic: NoraBaseDesignTokens['semantic'] = {
  colorScheme,
}
const noraDesignToken: NoraBaseDesignTokens & { components: PrimeComponentDesignTokens } = {
  components,
  primitive: noraPrimitive,
  semantic: noraSemantic,
}

export type MaterialSemanticColorScheme = MaterialBaseTokenSections.Semantic['colorScheme']

const materialPrimitive: MaterialBaseDesignTokens['primitive'] = {}
const materialSemantic: MaterialBaseDesignTokens['semantic'] = {
  colorScheme,
}
const materialDesignToken: MaterialBaseDesignTokens & { components: PrimeComponentDesignTokens } = {
  components,
  primitive: materialPrimitive,
  semantic: materialSemantic,
}

export {
  auraDesignToken as aura,
  laraDesignToken as lara,
  noraDesignToken as nora,
  materialDesignToken as material,
}
