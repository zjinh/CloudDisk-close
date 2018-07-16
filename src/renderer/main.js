import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import iView from 'iview';
import locale from 'iview/dist/locale/zh-cn';
import 'iview/dist/styles/iview.css';
Vue.use(iView, { locale });

import { MessageBox,Dialog} from 'element-ui';
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.use(Dialog);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
axios.defaults.withCredentials=true;
Vue.http = Vue.prototype.$http = axios;

Vue.config.productionTip = false;


new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app');