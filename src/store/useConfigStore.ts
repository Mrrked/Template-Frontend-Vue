import { onMounted, ref } from 'vue';

import { AxiosError } from 'axios';
import { ExtendedJWTPayload } from './types';
import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode';
import { useToast } from 'primevue/usetoast';

export const useConfigStore = defineStore('config', () => {

  const toast = useToast();
  const configStore = useConfigStore()

  const authenticatedUser = ref<ExtendedJWTPayload>({
    username: '',
    department: '',
    company_code: [0],
  })

  const currentTime = ref('');
  const currentDate = ref('');

  const updateTime = () => {
    const now = new Date();
    const hours = padZero(now.getHours() % 12);
    const minutes = padZero(now.getMinutes());
    const period = now.getHours() >= 12 ? 'PM' : 'AM';
    currentTime.value = `${hours}:${minutes} ${period}`;
    const month = now.toLocaleString('default', { month: 'long' });
    const day = padZero(now.getDate());
    currentDate.value = `${month} ${day}`;
  }

  const padZero = (value: number) => {
    return value < 10 ? '0' + value : value;
  };

  const formatTime1 = (number: number) => {
    // Convert the integer to a zero-padded string (if necessary)
    const timeStr = number.toString().padStart(6, '0');

    // Extract hours, minutes, and seconds
    let hours = parseInt(timeStr.slice(0, 2));
    const minutes = timeStr.slice(2, 4);
    const seconds = timeStr.slice(4, 6);

    // Determine AM or PM
    const period = hours < 12 ? 'AM' : 'PM';

    // Convert to 12-hour format
    if (hours === 0) {
        hours = 12;  // Midnight case
    } else if (hours > 12) {
        hours -= 12;  // Convert to 12-hour time
    }

    // Return formatted time string
    return `${hours}:${minutes}:${seconds} ${period}`;
  }

  // Month Day, Year
  const formatDate1 = (number: number) => {
    // Ensure the number is a string and pad with leading zeros if necessary
    const dateStr: string = number.toString().padStart(8, '0');

    // Extract year, month, and day from the date string
    const year: number = parseInt(dateStr.slice(0, 4), 10);
    const month: number = parseInt(dateStr.slice(4, 6), 10) - 1; // Months are 0-indexed in JavaScript
    const day: number = parseInt(dateStr.slice(6, 8), 10);

    // Create a date object
    const date: Date = new Date(year, month, day);

    // Define options for the desired format
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    // Format the date and return it
    return date.toLocaleDateString('en-US', options);
  }

  // Year/Month/Day
  const formatDate2 = (number: number) => {
    const dateStr = number.toString();
    const year = dateStr.slice(0, 4);
    const month = dateStr.slice(4, 6);
    const day = dateStr.slice(6, 8);
    return `${year}/${month}/${day}`;
  }

  const formatDateToInteger = (date: Date) => {
    try {
      return parseInt(`${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`)
    } catch (error) {
      return 0
    }
  }

  // 0001
  const fillNumberWithZeroes = (num: number | string, length: number): string => {
    return num.toString().trim().padStart(length, '0');
  }

  const formatFloatNumber1 = (num: number) => {
    if(num)
      return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    else
      return '0.00'
  }

  // GET COMPOUNDED PENALTY
  const getCompoundedPenalty = (amort: number, compound_times: number, penalty_rate: number) => {

    const mround = (number: number) => {
      return Math.round(number / 5) * 5;
    }

    let last_penalty = 0;
    let final_penalty = 0;

    for (let index = 0; index < compound_times; index++) {
      const penalty = (last_penalty + amort) * penalty_rate;
      const rounded_penalty = mround(penalty);
      final_penalty = rounded_penalty + last_penalty;
      last_penalty = final_penalty;
    }

    return final_penalty
  }

  const getRoundedTwoDecimals = (num: number) => {
    return Math.round(num * 100) / 100
  }

  const handleError = (error: AxiosError) => {
    if (error.response?.status) {
      const errData = error.response?.data as { error: string, exception?: string };

      interface ErrorLog {
        status: number,
        statusText: string,
        message: string,
        exception: string,
        date: string,
        time: string,
      }

      let errorLog:ErrorLog = {
        'status': error.response.status,
        'statusText': error.response.statusText,
        'message': errData.error || '',
        'exception': errData.exception || '',
        'date': new Date().toLocaleDateString(),
        'time': new Date().toLocaleTimeString(),
      }

      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: errData.error ? errData.error : error.response.statusText + ': ' + error.message,
        life: 5000
      });

      console.log(JSON.stringify(errorLog));

      const ERROR_LOGS = localStorage.getItem(new Date().toLocaleDateString())
      let ERROR_LOGS_JSON: ErrorLog[] = []

      if (ERROR_LOGS) {
        ERROR_LOGS_JSON = JSON.parse(ERROR_LOGS) as ErrorLog[]
      }

      ERROR_LOGS_JSON.push(errorLog)

      console.log(ERROR_LOGS_JSON);

      localStorage.setItem(new Date().toLocaleDateString(), JSON.stringify(ERROR_LOGS_JSON))

    } else {
      // SERVER IS NOT RECEIVING REQUESTS
      // SERVER COULD BE DOWN
      console.log('Error: No Response Status Returned');
      toast.add({
        severity: 'warn',
        summary: 'Error',
        detail: 'Can\'t reach server.',
        life: 5000
      });
    }
  };

  onMounted(() => {
    updateTime();
    setInterval(updateTime, 1000);

    const token = localStorage.getItem('access')
    if (token) {
      const access_token_decoded = jwtDecode(token) as ExtendedJWTPayload;

      configStore.authenticatedUser = {
        username: access_token_decoded.username,
        department: access_token_decoded.department,
        company_code: access_token_decoded.company_code,
      }
    }
  });

  return {
    authenticatedUser,

    currentDate,
    currentTime,

    formatTime1,
    formatDate1,
    formatDate2,
    formatDateToInteger,
    fillNumberWithZeroes,
    formatFloatNumber1,

    getCompoundedPenalty,
    getRoundedTwoDecimals,

    handleError,
  }
})