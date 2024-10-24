import App from './App.vue'
import ConfirmationService from 'primevue/confirmationservice';
import DialogService from 'primevue/dialogservice';
import FocusTrap from 'primevue/focustrap';
import {MainPreset} from './presets/MainPreset';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
import axios from './axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$axios = axios;


app
.use(createPinia())
.use(PrimeVue, {
    theme: {
        preset: MainPreset,
        options: {
            prefix: 'p',
            darkModeSelector: '.dark',
        }
    }
})

.use(DialogService)
.use(ToastService)
.use(ConfirmationService)
.use(router)
.directive('tooltip', Tooltip)
.directive('focustrap', FocusTrap)
.mount('#app')