import Vue from 'vue';
import VeeValidate, {Validator} from 'vee-validate';
//Language (English)
import validatorEn from 'vee-validate/dist/locale/en.json';

Vue.use(VeeValidate, {
    fieldsBagName: 'veeFields'
});

Validator.localize('en', validatorEn);