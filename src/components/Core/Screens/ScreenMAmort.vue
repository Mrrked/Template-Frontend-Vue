<script setup lang="ts">
  import SchedPaymentMAmortDataTable from "../Index/SchedPaymentMAmortDataTable.vue";
  import SchedPaymentInsDPDataTable from "../Index/SchedPaymentInsDPDataTable.vue";
  import { useA_AmortStore } from "../../../store/useA_AmortStore";
  import { useMainStore } from "../../../store/useMainStore";
  import InputGroupAddon from 'primevue/inputgroupaddon';
  import ResetButton from '../Index/ResetButton.vue';
  import InputGroup from 'primevue/inputgroup';
  import Popover from 'primevue/popover';
  import Button from 'primevue/button';
  import { storeToRefs } from "pinia";
  import { ref } from "vue";

  defineProps<{
    activateCallback: Function
  }>()

  const mainStore = useMainStore();
  const a_amortStore = useA_AmortStore();

  const {
    months,

    isInstallmentDP,
    hasPendingSOPIDF,
    hasPendingSOPMA,
    showMonthsInput,
    maxAllowedMonthsInput,

    getClientUnit,
  } = storeToRefs(a_amortStore)

  const {
    handleRefresh,

    handleEnterMonths,
    handleShowHistoryOfPayments,
    handleShowVerificationOfPayments,
  } = a_amortStore

  const idp_popover = ref();
  const togglePopover = (event: MouseEvent) => {
    idp_popover.value.toggle(event);
  }

</script>


<template>
  <!-- HEADER -->
  <div class="grid w-full grid-cols-8 gap-3">
    <div class="flex items-start justify-start col-span-2 gap-3">
      <Button
        v-if="mainStore.config.selectedOption === 'By Project | Block | Lot'"
        @click="mainStore.handleReturnInquiryForm(activateCallback)"
        raised
        type="button"
        label="BACK"
        icon="pi pi-arrow-left"
      />
      <Button
        v-if="mainStore.config.selectedOption === 'By Client\'s Name'"
        @click="mainStore.handleReturnUnitSelection(activateCallback)"
        raised
        type="button"
        label="BACK"
        icon="pi pi-arrow-left"
      />
      <ResetButton v-if="mainStore.config.selectedOption === 'By Client\'s Name'" :activateCallback="activateCallback"/>
      <Button
        @click="handleRefresh"
        raised
        type="button"
        icon="pi pi-refresh"
      />
    </div>
    <div class="flex flex-col items-center justify-center col-span-4">
      <div class="text-lg font-bold">
        {{ getClientUnit.unitDesc }}
      </div>
      <div class="font-semibold opacity-80">
        {{ getClientUnit.maScheme }}
      </div>
    </div>
    <div v-if="showMonthsInput"
      class="flex items-center justify-end col-span-2 gap-3 pr-2 font-semibold"
    >
      <form @submit.prevent="handleEnterMonths()">
        <InputGroup>
          <InputGroupAddon>
            <label for="months" class="font-bold text-content-background">
              MONTHS
            </label>
          </InputGroupAddon>
          <input
            v-model="months"
            :min="0"
            :max="maxAllowedMonthsInput"
            class="font-bold text-center outline-none border-primary-color border-y"
            type="number"
            name="months"
            placeholder="0"
            autofocus
            autocomplete="off"
          >
          <Button
            type="submit"
            label="ENTER"
          />
        </InputGroup>
      </form>
    </div>
  </div>
  <!-- CONTENT -->
  <div class="flex flex-col w-full gap-3">
    <!-- INFORMATION -->
    <div class="flex flex-col gap-1">
      <div class="grid px-2 text-sm rounded-sm grid-cols-24 gap-x-10">
        <div class="col-span-8">
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Project/Block/Lot :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.pbl }}
            </div>
          </div>
        </div>
        <div class="col-span-10">

        </div>
        <div :class="[
            getClientUnit.main.over_under !== '0.00' && 'animated-border pl-2',
            'flex items-center justify-between col-span-6 gap-2 py-1 pr-2 ']
          "
        >
          <div class="font-bold shrink-0 w-fit">
            Over/Under :
          </div>
          <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
            {{ getClientUnit.main.over_under }}
          </div>
        </div>
      </div>
      <div class="grid w-full px-2 pb-1 text-sm rounded-sm grid-cols-24 gap-x-10 ">
        <!-- COL 1 -->
        <div class="flex flex-col col-span-8">
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Client Name :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre text-wrap">
              {{ getClientUnit.main.client_name }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Client Key :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.client_number }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Temporary Client Number :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.tcltno }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              TIN :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.tin }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Company :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.company_code }}
            </div>
          </div>
        </div>
        <!-- COL 2 -->
        <div class="flex flex-col col-span-5">
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Date Sold :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.date_sold }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Occupancy Date :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.occupancy_date }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              First M.A. Date :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.first_ma_date }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Last M.A. Date :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.last_ma_date }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Installment Date :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.installment_date }}
            </div>
          </div>
        </div>
        <!-- COL 3 -->
        <div class="flex flex-col col-span-5">
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Months Paid :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.no_months_paid }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Term :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.term }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Term Price :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.term_price }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              DP :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.downpayment }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Ret. Check Code :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.ret_check_code }}
            </div>
          </div>
        </div>
        <!-- COL 4 -->
        <div class="flex flex-col col-span-6">
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Amortization :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.amortization }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              2nd MA :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.second_amortization }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Schedule Balance :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.schedule_balance }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Actual Balance :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.actual_balance }}
            </div>
          </div>
          <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
            <div class="font-bold shrink-0 w-fit">
              Running Balance :
            </div>
            <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
              {{ getClientUnit.main.running_balance }}
            </div>
          </div>
        </div>
      </div>
      <Popover v-if="isInstallmentDP" ref="idp_popover" class="my-popover">
        <div class="flex flex-col gap-2 w-[47rem] p-2">
          <span class="block mb-2 font-medium">
            Installment DP Details
          </span>
          <div class="grid w-full grid-cols-3 gap-8 text-sm">
            <div class="flex flex-col">
              <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
                <div class="font-bold shrink-0 w-fit">
                  First DP Date :
                </div>
                <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
                  {{ getClientUnit.idp.first_dp_date }}
                </div>
              </div>
              <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
                <div class="font-bold shrink-0 w-fit">
                  Last DP Date :
                </div>
                <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
                  {{ getClientUnit.idp.last_dp_date }}
                </div>
              </div>
              <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
                <div class="font-bold shrink-0 w-fit">
                  DP Inst. Date :
                </div>
                <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
                  {{ getClientUnit.idp.dp_inst_date }}
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
                <div class="font-bold shrink-0 w-fit">
                  Months Paid :
                </div>
                <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
                  {{ getClientUnit.idp.no_months_paid }}
                </div>
              </div>
              <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
                <div class="font-bold shrink-0 w-fit">
                  Installment Term  :
                </div>
                <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
                  {{ getClientUnit.idp.inst_term }}
                </div>
              </div>
              <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
                <div class="font-bold shrink-0 w-fit">
                  Net DP :
                </div>
                <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
                  {{ getClientUnit.idp.net_dp }}
                </div>
              </div>
              <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
                <div class="font-bold shrink-0 w-fit">
                  Reservation Fee :
                </div>
                <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
                  {{ getClientUnit.idp.res_fee }}
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
                <div class="font-bold shrink-0 w-fit">
                  DP Amortization :
                </div>
                <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
                  {{ getClientUnit.idp.dp_amort }}
                </div>
              </div>
              <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
                <div class="font-bold shrink-0 w-fit">
                  Schedule Balance :
                </div>
                <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
                  {{ getClientUnit.idp.schedule_balance }}
                </div>
              </div>
              <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
                <div class="font-bold shrink-0 w-fit">
                  Actual Balance :
                </div>
                <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
                  {{ getClientUnit.idp.actual_balance }}
                </div>
              </div>
              <div class="flex items-center justify-between col-span-1 gap-2 py-1 pr-2">
                <div class="font-bold shrink-0 w-fit">
                  Running Balance :
                </div>
                <div class="flex-grow w-full tracking-wider text-right whitespace-pre">
                  {{ getClientUnit.idp.running_balance }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Popover>
      <div class="flex justify-between px-2 text-sm">
        <div class="flex gap-2">
          <Button @click="handleShowHistoryOfPayments"
            size="small"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
            </svg>
            History of Payments
          </Button>
          <Button @click="handleShowVerificationOfPayments"
            size="small"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
            </svg>
            Verification of Payments
          </Button>
        </div>

        <Button @click="togglePopover" v-if="isInstallmentDP"
          size="small"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
          </svg>
          Installment DP Details
        </Button>
      </div>
    </div>
    <!-- TABLES -->
    <div class="flex flex-col gap-5">
      <SchedPaymentInsDPDataTable v-if="hasPendingSOPIDF" />
      <SchedPaymentMAmortDataTable v-if="hasPendingSOPMA" />
    </div>
  </div>
</template>