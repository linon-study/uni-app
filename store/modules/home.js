import { actions } from '../actions/home'
import { getters } from '../getters/home'
import { mutations } from '../mutations/home'

const state = {
	taskList: [],
	taskDetails: {},
}

export default {
	namespaced: true,
	state: state,
	actions: actions,
	getters: getters,
	mutations: mutations
}
