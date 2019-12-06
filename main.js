import Vue from 'vue'
import App from './App'
import store from './store'

import validate from 'js_sdk/fshjie-formvalidate/ys-validate.js'
import moment from 'moment'

// validate验证
Vue.prototype.$validate = validate

//moment
Vue.prototype.$moment = moment

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	validate,
    ...App
})
app.$mount()
