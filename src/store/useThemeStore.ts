import { COLOR_SCHEMES, ColorScheme } from '../presets/MainPreset';
import { computed, onMounted, ref } from 'vue';

import { defineStore } from 'pinia';
import { updatePrimaryPalette } from '@primevue/themes';

export const useThemeStore = defineStore('theme', () => {

  const theme_mode = ref<boolean>(false);

  const selectedColorScheme = ref<ColorScheme|null>()

  const getThemeMode = computed((): 'light' | 'dark' => {
    if (theme_mode.value) {
      return 'dark'
    } else {
      return 'light'
    }
  })

  const updateColorScheme = (colorScheme: ColorScheme) => {
    updatePrimaryPalette(colorScheme.colors)
    selectedColorScheme.value = colorScheme
    localStorage.setItem('color_scheme', colorScheme.colorSchemeName)
  }

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', getThemeMode.value);
  }

  onMounted(()=>{
    const stored_theme_mode = localStorage.getItem('theme');

    if (stored_theme_mode === 'dark') {
      theme_mode.value = true
      document.documentElement.classList.toggle('dark');
    } else {
      theme_mode.value = false
      localStorage.setItem('theme', 'False');
    }

    const stored_color_scheme_name = localStorage.getItem('color_scheme');
    const storedColorScheme:ColorScheme|undefined = COLOR_SCHEMES.find((color_scheme) => color_scheme.colorSchemeName === stored_color_scheme_name)

    if (storedColorScheme) {
      selectedColorScheme.value = storedColorScheme
    } else {
      selectedColorScheme.value = COLOR_SCHEMES[0]
    }
  })

  return {
    theme_mode,
    getThemeMode,
    selectedColorScheme,

    toggleDarkMode,
    updateColorScheme,
  }
})