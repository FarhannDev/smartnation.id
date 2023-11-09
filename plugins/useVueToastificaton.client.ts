import { defineNuxtPlugin } from '#app';
import { useToast } from 'vue-toastification';
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';

export default defineNuxtPlugin(() => {
  const toast = useToast();
  return {
    provide: {
      toast: toast,
    },
  };
});
