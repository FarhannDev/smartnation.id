import { defineNuxtPlugin } from '#app';
import * as Toast from 'vue-toastification';
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast.default);
  return {
    provide: {
      toast: Toast.useToast(),
    },
  };
});
