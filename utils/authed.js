import request from './request';

//获取tokens
export const getTokenByCodeUtils = (params) => {
	const url = 'uaa/v1/auth/tokens';
	return request.post(url, params);
}

//获得AppId,小程序名称
export const getWxAppNameUtils = (params) => {
	const url = 'uaa/v1/ext-app-creds';
	return request.get(url, params);
}

//通过经纬度获取当前城市名称
export const getCityNameUtils = (params) => {
	const url = 'common/v1/geocode' + params;
	return request.get(url, params);
}

//通过城市名称获取省市区code
export const getProvinceCityCodeUtils = (params) => {
	const url = 'common/v1/area-code' + params;
	return request.get(url, params);
}

//快速登录绑定手机号并等录
export const getBindMobileActionUtils = (params) => {
	const url = 'uaa/v1/users/op/bind-mobile';
	return request.post(url, params);
}

//发送验证码
export const getSmsCodeActionUtils = (params) => {
	const url = 'sms/v1/sms_codes';
	return request.post(url, params);
}
