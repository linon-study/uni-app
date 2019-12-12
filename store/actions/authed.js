import * as types from '../constants/types'
import {
	uniPopup
} from "@dcloudio/uni-ui"
import {
	getTokenByCodeUtils,
	getWxAppNameUtils,
	getCityNameUtils,
	getProvinceCityCodeUtils,
	getBindMobileActionUtils,
	getSmsCodeActionUtils,
} from '../../utils/authed'

export const actions = {
	
	//获取tokens
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

//获得AppId,小程序名称
	getWxAppNameAction({
		commit
	}, params) {
		console.log('params......', params)
		return getWxAppNameUtils(params)
			.then(data => {
				if (data && data.code >= 300) {
					uni.showToast({
						icon: 'none',
						title: data.message,
						duration: 2000
					});
				} else {
					commit(types.WX_APP_NAME, data, params)
				}
				return data

			})
			.catch(err => {
				throw err;
			});
	},
	
	//通过经纬度获取当前城市名称
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

//通过城市名称获取省市区code
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

//快速登录绑定手机号并等录
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
					uni.switchTab({
					    url: '/pages/home/home'
					});
				}
				return data

			})
			.catch(err => {
				throw err;
			});
	},

//发送验证码
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
