import { actions } from '../actions/message'
import { getters } from '../getters/message'
import { mutations } from '../mutations/message'

const state = {
	messageList: [],
}

export default {
	namespaced: true,
	state: state,
	actions: actions,
	getters: getters,
	mutations: mutations
}
