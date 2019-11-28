import * as types from '../constants/types'
import wxRequest from '../../static/js/wechat-request.js';

export const mutations = {
	[types.TOKEN_BY_CODE](state, data) {
		let isLogin = data.user.type == 1 ? true : false;
		let Authorization = "Bearer " + data.access_token;
		
		wxRequest.defaults.headers['Authorization'] = Authorization;
		
		state.tokens = data
		state.Authorization = Authorization
		state.userInfo = data.user
		state.isLogin = isLogin
	},
	[types.CITY_CODE](state, data, params) {
		state.cityCode = data
		state.latitudeAndLongitude = params
	},
	[types.PROVINCE_CITY_CODE](state, data) {
		state.provinceCityCode = data
	},
	
	// [types.BIND_MOBILE](state, data) {
	// 	state.bindMobile = data
	// },
}
