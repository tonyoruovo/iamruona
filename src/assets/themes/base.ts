import type { LaraBaseDesignTokens, LaraBaseTokenSections } from '@primeuix/themes/lara/base'

export const nav = '80px'

export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

const amber = {
  '50': '#ffffea',
  '100': '#fffbc5',
  '200': '#fff885',
  '300': '#ffee46',
  '400': '#ffdf1b',
  '500': '#ffc107',
  '600': '#e29400',
  '700': '#bb6902',
  '800': '#985108',
  '900': '#7c420b',
  '950': '#482200',
}
const blue = {
  '50': '#f4f7fb',
  '100': '#e8eef6',
  '200': '#cbdcec',
  '300': '#9dbfdc',
  '400': '#689cc8',
  '500': '#4682b4',
  '600': '#346695',
  '700': '#2b5279',
  '800': '#274665',
  '900': '#253c55',
  '950': '#182739',
}
const red = {
  '50': '#fff0f0',
  '100': '#ffdddd',
  '200': '#ffc0c0',
  '300': '#ff9494',
  '400': '#ff5757',
  '500': '#ff2323',
  '600': '#ff0000' /*Main*/,
  '700': '#d70000',
  '800': '#b10303',
  '900': '#920a0a',
  '950': '#500000',
}
const green = {
  '50': '#f3faf3',
  '100': '#e3f5e3',
  '200': '#c8eac9',
  '300': '#9dd89f',
  '400': '#6bbd6e',
  '500': '#4caf50' /*Main*/,
  '600': '#358438',
  '700': '#2d6830',
  '800': '#275429',
  '900': '#224525',
  '950': '#0e2510',
}
const primary = {
  '50': '#fdf3f3',
  '100': '#fbe5e5',
  '200': '#f9cfcf',
  '300': '#f4adad',
  '400': '#eb7e7e',
  '500': '#de5555',
  '600': '#ca3838',
  '700': '#a52a2a' /*Main*/,
  '800': '#8d2727',
  '900': '#762626',
  '950': '#3f1010',
}
const accent = {
  '50': '#f4f7fb',
  '100': '#e8eef6',
  '200': '#cbdcec',
  '300': '#9dbfdc',
  '400': '#689cc8',
  '500': '#4682b4', /*Main*/
  '600': '#346695',
  '700': '#2b5279',
  '800': '#274665',
  '900': '#253c55',
  '950': '#182739',
}
const surface = {
  '50': '#f6f6f6',
  '100': '#e7e7e7',
  '200': '#d1d1d1',
  '300': '#b0b0b0',
  '400': '#989898' /**Main*/,
  '500': '#6d6d6d',
  '600': '#5d5d5d',
  '700': '#4f4f4f',
  '800': '#454545',
  '900': '#3d3d3d',
  '950': '#262626',
}
const dominant = {
  '50': '#f6f6f6',
  '100': '#e7e7e7',
  '200': '#d1d1d1',
  '300': '#b0b0b0',
  '400': '#989898',/**Main*/
  '500': '#6d6d6d',
  '600': '#5d5d5d',
  '700': '#4f4f4f',
  '800': '#454545',
  '900': '#3d3d3d',
  '950': '#262626',
}
const primitive: LaraBaseTokenSections.Primitive = {
  amber,
  blue,
  red,
  green,
}
const light = {
  surface,
  primary: { // background
    color: primary[300],
    contrastColor: accent[500],
    hoverColor: primary[400],
    activeColor: primary[500],
  },
  text: { // foreground
    color: dominant[900],
    hoverColor: dominant[950],
    mutedColor: dominant[200],
    hoverMutedColor: dominant[100],
  },
}
const dark = {
  surface,
  primary: { // background
    color: primary[700],
    contrastColor: accent[400],
    hoverColor: primary[600],
    activeColor: primary[400],
  },
  text: { // foreground
    color: dominant[100],
    hoverColor: dominant[50],
    mutedColor: dominant[800],
    hoverMutedColor: dominant[900],
  },
}
const colorScheme = {
  light,
  dark,
}
const semantic: LaraBaseTokenSections.Semantic = {
  primary,
  colorScheme,
}
const PrimeTheme: LaraBaseDesignTokens = {
  primitive,
  semantic,
}

export default PrimeTheme
