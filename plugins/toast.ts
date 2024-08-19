import Toast from "vue-toastification";  
import type { PluginOptions } from 'vue-toastification';  
import "vue-toastification/dist/index.css";  

export default defineNuxtPlugin((nuxtApp) => {  
  const options: PluginOptions = {};  
  nuxtApp.vueApp.use(Toast, options);  
});