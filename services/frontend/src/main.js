import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Axios
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000/';

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
	.use(router)
	.use(axios)
	.use(vuetify)
	.mount('#app')
