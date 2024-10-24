<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { useConfigStore } from '../../store/useConfigStore';
  import { useLoginStore } from '../../store/useLoginStore';
  import { COLOR_SCHEMES } from '../../presets/MainPreset';
  import ToggleSwitch from 'primevue/toggleswitch';
  import Popover from 'primevue/popover';
  import { ref } from 'vue';
  import { useThemeStore } from '../../store/useThemeStore';
  import { useDialog } from 'primevue/usedialog';

  const dialog = useDialog();

  const loginStore = useLoginStore()
  const themeStore = useThemeStore()
  const configStore = useConfigStore()

  const settings_popover = ref();

  const {
    authenticatedUser,

    currentDate,
    currentTime,
  } = storeToRefs(configStore)

  const togglePopover = (event: MouseEvent) => {
    settings_popover.value.toggle(event);
  }
</script>

<template>
  <nav class="flex flex-col items-center justify-center border-b-2 select-none border-surface-400 dark:border-surface-700 sm:justify-between sm:flex-row min-h-20">
    <div class="flex items-center gap-5 px-1 sm:px-5">
      <svg class="w-10 h-10 sm:w-14 sm:h-14" preserveAspectRatio="xMidYMid meet" viewBox="0 30.492 338.31600000000003 333.23400000000004" xmlns="http://www.w3.org/2000/svg" version="1.0" style="max-height: 500px" width="338.31600000000003" height="333.23400000000004">
        <g stroke="none" :fill="themeStore.getThemeMode === 'light' ? '#49090D' : 'white'" transform="translate(0.000000,403.000000) scale(0.100000,-0.100000)">
        <path d="M1568 3430 c-248 -61 -450 -265 -592 -598 -38 -89 -91 -259 -102&#10;-329 l-7 -43 266 0 266 0 5 43 c48 399 102 621 179 733 78 114 151 94 222 -61&#10;55 -118 101 -305 127 -512 l11 -93 262 0 262 0 -17 63 c-66 233 -175 438 -309&#10;580 -118 124 -231 190 -382 222 -87 18 -95 18 -191 -5z"/>
        <path d="M365 2364 c-48 -25 -71 -51 -101 -117 -25 -55 -29 -75 -32 -188 -7&#10;-243 60 -379 188 -379 82 0 134 50 166 159 16 52 15 55 -2 68 -27 20 -32 17&#10;-45 -29 -17 -65 -36 -96 -69 -113 -115 -60 -202 81 -187 303 10 146 46 216&#10;119 231 64 14 114 -24 132 -101 7 -29 20 -34 45 -19 12 8 13 16 2 53 -35 119&#10;-130 177 -216 132z"/>
        <path d="M690 2030 l0 -340 25 0 25 0 0 340 0 340 -25 0 -25 0 0 -340z"/>
        <path d="M810 2330 l0 -40 70 0 70 0 0 -300 0 -300 30 0 30 0 0 300 0 300 70&#10;0 70 0 0 40 0 40 -170 0 -170 0 0 -40z"/>
        <path d="M1170 2366 c0 -5 21 -56 126 -302 34 -80 34 -83 34 -228 l0 -146 30&#10;0 30 0 0 150 0 149 80 182 c44 100 80 186 80 191 0 4 -13 8 -28 8 -27 0 -31&#10;-6 -93 -159 -35 -88 -66 -158 -68 -156 -1 2 -31 73 -65 157 -61 150 -63 153&#10;-94 156 -18 2 -32 1 -32 -2z"/>
        <path d="M1610 2030 l0 -340 135 0 136 0 -5 28 c-2 15 -5 33 -5 40 -1 9 -29&#10;12 -106 12 l-105 0 0 300 0 300 -25 0 -25 0 0 -340z"/>
        <path d="M2047 2298 c-20 -89 -136 -566 -143 -590 -4 -14 1 -18 24 -18 28 0&#10;29 1 51 99 20 85 26 100 45 103 25 5 155 2 161 -4 2 -2 14 -46 27 -98 24 -93&#10;25 -95 55 -98 l31 -3 -60 233 c-33 128 -72 280 -87 338 -27 103 -28 105 -57&#10;108 -30 3 -31 2 -47 -70z m116 -313 c2 -18 -4 -20 -66 -20 -38 0 -70 2 -72 5&#10;-2 3 9 59 25 125 15 66 31 138 35 160 7 37 10 30 41 -105 19 -80 36 -154 37&#10;-165z"/>
        <path d="M2350 2031 l0 -341 25 0 25 0 1 263 0 262 24 -50 c14 -27 54 -122 91&#10;-210 110 -266 109 -265 138 -265 l26 0 0 340 0 340 -25 0 -25 0 -1 -267 c0&#10;-173 -4 -261 -10 -248 -5 11 -55 130 -112 265 -96 227 -106 245 -130 248 l-27&#10;3 0 -340z"/>
        <path d="M2780 2030 l0 -340 101 0 c85 0 107 3 139 21 52 30 85 94 106 208 28&#10;156 -3 330 -73 404 -35 36 -79 47 -185 47 l-88 0 0 -340z m246 225 c38 -47 49&#10;-100 48 -225 0 -133 -14 -192 -54 -232 -26 -26 -34 -28 -107 -28 l-78 0 3 261&#10;3 261 80 -4 c76 -3 83 -5 105 -33z"/>
        <path d="M870 1579 c0 -31 36 -167 71 -266 93 -264 243 -477 416 -593 170&#10;-114 343 -135 522 -65 237 92 451 375 564 743 l25 82 -259 0 c-199 0 -260 -3&#10;-263 -12 -2 -7 -12 -71 -21 -143 -34 -262 -110 -499 -184 -573 -131 -131 -265&#10;153 -327 696 l-17 152 -264 0 c-260 0 -263 0 -263 -21z"/>
        </g>
      </svg>
      <span class="flex flex-col flex-grow" >
        <span class="text-sm font-semibold sm:text-base lg:text-xl">
          System
        </span>
        <div class="text-sm font-bold sm:text-xl lg:text-2xl">
          Subsystem
        </div>
      </span>
    </div>
    <div class="items-center hidden gap-8 px-3 sm:flex ">
      <div class="flex justify-between gap-2 ">
        <div class="flex flex-col text-right">
          <div class="font-semibold">
            {{ authenticatedUser.department }} Department
          </div>
          <div class="text-sm">
            {{ authenticatedUser.username }}
          </div>
        </div>
        <div class="border border-black dark:border-white"></div>
        <div class="flex flex-col text-left">
          <div class="font-semibold">
            {{ currentDate }}
          </div>
          <div class="text-sm">
            {{ currentTime }}
          </div>
        </div>
      </div>
      <button
        type="button"
        class="p-2 rounded hover:scale-110"
        @click="togglePopover"
      >
        <svg class="text-primary-color size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />
        </svg>
      </button>
      <Popover ref="settings_popover" class="my-popover">
        <div class="flex flex-col w-40 gap-2 p-2 overflow-hidden">
          <div class="flex flex-wrap justify-center gap-[10px]">
            <div
              v-for="(colorScheme, index) in COLOR_SCHEMES"
              :key="index"
              :class="[
                'w-5 h-5 rounded-full cursor-pointer outline outline-2 outline-offset-1 hover:scale-125 hover:outline-primary-color',
                `${themeStore.selectedColorScheme?.colorSchemeName === colorScheme.colorSchemeName ? 'outline-primary-color' : 'outline-transparent '}`
              ]"
              :style="{
                backgroundColor: themeStore.getThemeMode === 'light' ? colorScheme.colors[500] : colorScheme.colors[400],
              }"
              @click="themeStore.updateColorScheme(colorScheme)"
              :title="colorScheme.colorSchemeName"
            >
            </div>
          </div>
          <div class="flex items-center gap-2">
            <ToggleSwitch v-model="themeStore.theme_mode" @update:model-value="themeStore.toggleDarkMode"/>
            <span >
              {{ themeStore.theme_mode ? 'Dark Mode' : 'Light Mode' }}
            </span>
          </div>
          <button
            type="button"
            class="flex items-center gap-2 px-2 py-1 rounded bg-primary-color text-primary-contrastColor hover:bg-primary-hoverColor"
            @click="loginStore.handleExecuteLogout"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
            </svg>
            <span class="font-semibold">
              Logout
            </span>
          </button>
        </div>
      </Popover>

    </div>
  </nav>
</template>