import { computed, ref } from 'vue'

import LoadingModal from '../components/Dialog/General/LoadingModal.vue';
import axios from '../axios'
import { defineStore } from 'pinia'
import { useConfigStore } from './useConfigStore';
import { useDialog } from 'primevue/usedialog';

export const useCoreDataStore = defineStore('coreData', () => {


  const dialog = useDialog();
  const configStore = useConfigStore();

  const fetchData = () => {
    const loadingDialogRef = dialog.open(LoadingModal, {
      data: {
        label: 'System Loading ...'
      },
      props: {
        style: {
          paddingTop: '1.5rem',
        },
        showHeader: false,
        modal: true
      }
    });

    Promise.all([
      // axios.get('verification/core/project_codes/')
      //   .then((response) => {
      //     // console.log('RESPONSE', response);
      //   }),
      // axios.get('verification/core/company_codes/')
      //   .then((response) => {
      //     // console.log('RESPONSE', response);
      //   }),
      // axios.get('verification/core/bill_types/')
      //   .then((response) => {
      //     // console.log('RESPONSE', response);
      //   }),
      // axios.get('verification/core/mother_bill_types/')
      //   .then((response) => {
      //     // console.log('RESPONSE', response);
      //   })
    ])
    .catch(configStore.handleError)
    .finally(() => {
      loadingDialogRef.close();
    });
  };

  return {
    fetchData,
  }
})