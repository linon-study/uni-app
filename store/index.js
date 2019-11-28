import Vue from 'vue'
import Vuex from 'vuex'
import authed from './modules/authed'
import home from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		authed: authed,
		home: home,
	}
})

export default store
