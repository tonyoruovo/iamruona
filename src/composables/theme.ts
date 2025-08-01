
import { SchemeId } from '@/modules/enums/ui.enum';
import { ref, watch, onMounted } from 'vue';

const THEME_KEY = 'app-theme';

export function useTheme() {
  const theme = ref(SchemeId.SYSTEM);
  const isDark = ref(false);

  // Apply theme class to document
  const applyTheme = (newTheme: SchemeId) => {
    const html = document.documentElement;

    const clear = () => {
      try {
        html.classList.remove(SchemeId.LIGHT, SchemeId.DARK)
        html.removeAttribute('data-theme');
      } catch (error) {
        console.error(error)
      }
    }

    if(newTheme === SchemeId.SYSTEM) {
      clear()
    } else if(newTheme === SchemeId.LIGHT) {
      clear()
      html.classList.add(SchemeId.LIGHT);
      html.setAttribute('data-theme', SchemeId.LIGHT);
    } else if(newTheme === SchemeId.DARK) {
      clear()
      html.classList.add(SchemeId.DARK);
      html.setAttribute('data-theme', SchemeId.DARK);
    }
    
    // if (newTheme === SchemeId.DARK || (newTheme === SchemeId.SYSTEM && isDark.value)) {
    //   html.classList.add(SchemeId.DARK);
    //   html.setAttribute('data-theme', SchemeId.DARK);
    // } else {
    //   html.classList.remove(SchemeId.DARK);
    //   html.setAttribute('data-theme', SchemeId.LIGHT);
    // }
  };

  // Update PrimeVue theme
  /*const updatePrimeTheme = (newTheme: SchemeId) => {
    const themeLink = document.getElementById('prime-theme');
    if (themeLink) {
      const themeName = newTheme.startsWith(SchemeId.DARK) ? 'lara-dark-blue' : 'lara-light-blue';
      themeLink.href = themeLink.href.replace(/lara-(light|dark)-blue/, themeName);
    }
  };*/

  // Set theme and persist
  const setTheme = (newTheme: SchemeId) => {
    theme.value = newTheme;
    localStorage.setItem(THEME_KEY, newTheme);
    applyTheme(newTheme);
    // updatePrimeTheme(newTheme);
  };

  // Check system preference
  const checkSystemPreference = () => {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  // Initialize
  onMounted(() => {
    checkSystemPreference();
    const savedTheme = localStorage.getItem(THEME_KEY) || SchemeId.SYSTEM;
    setTheme(savedTheme as SchemeId);
    
    // Watch system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkSystemPreference);
  });

  watch(isDark, () => {
    if (theme.value === SchemeId.SYSTEM) applyTheme(SchemeId.SYSTEM);
  });

  return {
    theme,
    setTheme,
    isDark
  };
}
