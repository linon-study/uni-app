import Vue from 'vue'
import Vuex from 'vuex'
import authed from './modules/authed'
import home from './modules/home'
import message from './modules/message'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		authed: authed,
		home: home,
		message: message,
	}
})

export default store
