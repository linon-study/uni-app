import * as types from '../constants/types'

export const mutations = {
	[types.TASK_LIST](state, data) {
		state.taskList = data
	},
	[types.TASK_DETAILS](state, data) {
		state.taskDetails = data
	},
}
