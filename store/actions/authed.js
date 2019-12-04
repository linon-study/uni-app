import * as types from '../constants/types'
import {
	uniPopup
} from "@dcloudio/uni-ui"
import {
	getTokenByCodeUtils,
	getCityNameUtils,
	getProvinceCityCodeUtils,
	getBindMobileActionUtils,
	getSmsCodeActionUtils,
} from '../../utils/authed'

export const actions = {
	getTokenByCode({
		commit
	}, params) {
		console.log('params......', params)
		return getTokenByCodeUtils(params)
			.then(data => {
				if (data && data.code >= 300) {
					uni.showToast({
						icon: 'none',
						title: data.message,
						duration: 2000
					});
				} else {
					commit(types.TOKEN_BY_CODE, data)
				}
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
				if (data && data.code >= 300) {
					uni.showToast({
						icon: 'none',
						title: data.message,
						duration: 2000
					});
				} else {
					commit(types.CITY_CODE, data, params)
				}
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
				if (data && data.code >= 300) {
					uni.showToast({
						icon: 'none',
						title: data.message,
						duration: 2000
					});
				} else {
					commit(types.PROVINCE_CITY_CODE, data)
				}
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
				if (data && data.code >= 300) {
					uni.showToast({
						icon: 'none',
						title: data.message,
						duration: 2000
					});
				} else {
					commit(types.TOKEN_BY_CODE, data)
					uni.reLaunch({
						url: '../../pages/home/home'
					});
				}
				return data

			})
			.catch(err => {
				throw err;
			});
	},

	getSmsCodeAction({
		commit
	}, params) {
		console.log('params......', params)
		return getSmsCodeActionUtils(params)
			.then(data => {
				if (data && data.code >= 300) {
					uni.showToast({
						icon: 'none',
						title: data.message,
						duration: 2000
					});
				} else {
					commit(types.SMS_CODE, data)
				}
				return data
			})
			.catch(err => {
				throw err;
			});
	}
}
