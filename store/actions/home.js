import * as types from '../constants/types'
import {
	uniPopup
} from "@dcloudio/uni-ui"
import {
	getTaskListUtils,
	getTaskDetailsUtils,
	getRecommentdTaskUtils,
	getWithdrawCheckUtils,
	getIndividualPointsUtils,
} from '../../utils/home'

export const actions = {
	//任务列表
	getTaskListAction({
		commit
	}, params) {
		console.log('params......', params)
		return getTaskListUtils(params)
			.then(data => {
				if (data && data.code >= 300) {
					uni.showToast({
						icon: 'none',
						title: data.message,
						duration: 2000
					});
				} else {
					commit(types.TASK_LIST, data.items)
				}
				return data
			})
			.catch(err => {
				throw err;
			});
	},

	//任务详情
	getTaskDetailsAction({
		commit
	}, params) {
		console.log('params......', params)
		return getTaskDetailsUtils(params)
			.then(data => {
				if (data && data.code >= 300) {
					uni.showToast({
						icon: 'none',
						title: data.message,
						duration: 2000
					});
				} else {
					commit(types.TASK_DETAILS, data)
				}
				return data
			})
			.catch(err => {
				throw err;
			});
	},

	//打卡任务列表
	getRecommentdTaskAction({
		commit
	}, params) {
		console.log('params......', params)
		return getRecommentdTaskUtils(params)
			.then(data => {
				if (data && data.code >= 300) {
					uni.showToast({
						icon: 'none',
						title: data.message,
						duration: 2000
					});
				} else {
					commit(types.RECOMMENT_TASK, data)
				}
				return data
			})
			.catch(err => {
				throw err;
			});
	},

	//验证是否有提现功能
	getWithdrawCheckAction({
		commit
	}, params) {
		console.log('params......', params)
		return getWithdrawCheckUtils(params)
			.then(data => {
				if (data && data.code >= 300) {
					uni.showToast({
						icon: 'none',
						title: data.message,
						duration: 2000
					});
				} else {
					commit(types.WITHDRAW_CHECK, data)
				}
				return data
			})
			.catch(err => {
				throw err;
			});
	},
	
	//获取个人积分
	getIndividualPointsAction({
		commit
	}, params) {
		console.log('params......', params)
		return getIndividualPointsUtils(params)
			.then(data => {
				if (data && data.code >= 300) {
					uni.showToast({
						icon: 'none',
						title: data.message,
						duration: 2000
					});
				} else {
					commit(types.INDIVIDUAL_POINTS, data)
				}
				return data
			})
			.catch(err => {
				throw err;
			});
	},

}
