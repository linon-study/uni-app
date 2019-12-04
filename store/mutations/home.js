import * as types from '../constants/types'

export const mutations = {
	[types.TASK_LIST](state, data) {
		state.taskList = data
	},
	[types.TASK_DETAILS](state, data) {
		state.taskDetails = data
	},
	[types.RECOMMENT_TASK](state, data) {
		state.singTaskList = data
	},
	[types.WITHDRAW_CHECK](state, data) {
		state.withdrawCheck = data
	},
	[types.INDIVIDUAL_POINTS](state, data) {
		state.individualPoints = data
	},
	
}
