import request from './request';

//获取消息列表
export const getMessageListUtils = (params) => {
	const url = 'messagemgm/v1/messages' + params;
	return request.get(url, params);
}



