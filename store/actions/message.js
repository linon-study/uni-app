import * as types from '../constants/types'
import {
	uniPopup
} from "@dcloudio/uni-ui"
import {
	getMessageListUtils,
} from '../../utils/message'

export const actions = {
	//任务列表
	getMessageListAction({
		commit
	}, params) {
		console.log('params......', params)
		return getMessageListUtils(params)
			.then(data => {
				if (data && data.code >= 300) {
					uni.showToast({
						icon: 'none',
						title: data.message,
						duration: 2000
					});
				} else {
					commit(types.MESSAGE_LIST, data.items)
				}
			})
			.catch(err => {
				throw err;
			});
	},

}
