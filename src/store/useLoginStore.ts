import { ExtendedJWTPayload } from './types';
import LoadingModal from '../components/Dialog/General/LoadingModal.vue';
import axios from '../axios';
import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode';
import { ref } from 'vue'
import { useConfigStore } from './useConfigStore';
import { useConfirm } from "primevue/useconfirm";
import { useDialog } from 'primevue/usedialog';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';

export const useLoginStore = defineStore('login', () => {

  const confirm = useConfirm();
  const toast = useToast()
  const dialog = useDialog();
  const router = useRouter();
  const configStore = useConfigStore();

  // STATES
  const username = ref<string>('');
  const password = ref<string>('');

  // ACTIONS
  const handleExecuteLogin = () => {
    const data = {
      username: username.value,
      password: password.value
    }

    if (data.username && data.password) {
      const loadingDialogRef = dialog.open(LoadingModal, {
        data: {
          label: 'Logging In ...'
        },
        props: {
          style: {
            paddingTop: '1.5rem',
          },
          showHeader: false,
          modal: true
        }
      })
      axios.post('auth/login/', data)
      .then((response) => {

        const tokens = response.data.tokens
        const access_token_decoded = jwtDecode(tokens.access) as ExtendedJWTPayload;
        localStorage.setItem('access', tokens.access)
        localStorage.setItem('refresh', tokens.refresh)

        configStore.authenticatedUser = {
          username: access_token_decoded.username,
          department: access_token_decoded.department,
          company_code: access_token_decoded.company_code,
        }

        toast.add({
          severity: 'success',
          summary: 'Success',
          detail: response.data.message,
          life: 3000
        });

        username.value = ''
        password.value = ''
        router.push('/')
      })
      .catch(configStore.handleError)
      .finally(() => {
        loadingDialogRef.close()
      })

    } else {
      alert("Missing User ID or Password");
    }
  }

  const handleExecuteLogout = () => {
    confirm.require({
      message: 'Are you sure you want to logout?',
      header: 'Confirm Logout',
      icon: 'pi pi-exclamation-triangle',
      rejectProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true
      },
      acceptProps: {
        label: 'Logout'
      },
      accept: () => {
        axios.post('auth/logout/')
        .then((response) => {
          toast.add({
            severity: 'success',
            summary: 'Success',
            detail: response.data.message,
            life: 3000
          });

          localStorage.removeItem('access');
          localStorage.removeItem('refresh');
          router.push('/login')
        });
      },
      reject: () => {
      }
    });
  }

  return {
    username,
    password,
    handleExecuteLogin,
    handleExecuteLogout,
  }
})