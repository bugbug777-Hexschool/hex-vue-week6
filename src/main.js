import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  configure,
  defineRule,
  Form, Field,
  ErrorMessage,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { loadLocaleFromURL, localize } from '@vee-validate/i18n';
import App from './App.vue';
import router from './router';

// Rules
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

// Localize
loadLocaleFromURL('zh_TW.json');
configure({
  generateMessage: localize('zh_TW'),
  validateOnInput: true,
});

const app = createApp(App);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
