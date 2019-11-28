import * as types from '../constants/types'
import {
		uniPopup
	} from "@dcloudio/uni-ui"
import {
	getTokenByCodeUtils,
	getCityNameUtils,
	getProvinceCityCodeUtils,
	getBindMobileActionUtils,
} from '../../utils/authed'

export const actions = {
    getTokenByCode({
    	commit
    }, params) {
    	console.log('params......', params)
    	return getTokenByCodeUtils(params)
    		.then(data => {
    			commit(types.TOKEN_BY_CODE, data)
    			return data
    		})
    		.catch(err => {
    			throw err;
    		});
    },
		
		getCityName({
			commit
		}, params) {
			console.log('params......', params)
			return getCityNameUtils(params)
				.then(data => {
					commit(types.CITY_CODE, data, params)
					return data
				})
				.catch(err => {
					throw err;
				});
		},
		
		getProvinceCityCode({
			commit
		}, params) {
			console.log('params......', params)
			return getProvinceCityCodeUtils(params)
				.then(data => {
					commit(types.PROVINCE_CITY_CODE, data)
					return data
				})
				.catch(err => {
					throw err;
				});
		},
		
		getBindMobileAction({
			commit
		}, params) {
			console.log('params......', params)
			return getBindMobileActionUtils(params)
				.then(data => {
					commit(types.TOKEN_BY_CODE, data)
					return data
				})
				.catch(err => {
					throw err;
				});
		}
}

