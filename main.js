import Vue from 'vue'
import App from './App'
import store from './store'

import validate from 'js_sdk/fshjie-formvalidate/ys-validate.js'

// validate验证
Vue.prototype.$validate = validate

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	validate,
    ...App
})
app.$mount()
