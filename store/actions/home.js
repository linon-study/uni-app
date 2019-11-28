import * as types from '../constants/types'
import {
		uniPopup
	} from "@dcloudio/uni-ui"
import {
	getTaskListUtils,
	getTaskDetailsUtils,
} from '../../utils/home'

export const actions = {
    getTaskListAction({
    	commit
    }, params) {
    	console.log('params......', params)
    	return getTaskListUtils(params)
    		.then(data => {
    			commit(types.TASK_LIST, data.items)
    		})
    		.catch(err => {
    			throw err;
    		});
    },
		
		getTaskDetailsAction({
			commit
		}, params) {
			console.log('params......', params)
			return getTaskDetailsUtils(params)
				.then(data => {
					commit(types.TASK_DETAILS, data)
				})
				.catch(err => {
					throw err;
				});
		},

}

