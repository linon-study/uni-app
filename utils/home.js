import request from './request';

//获取任务列表
export const getTaskListUtils = (params) => {
	const url = 'socialwork/v1/jobs' + params;
	return request.get(url, params);
}

//获取任务详情
export const getTaskDetailsUtils = (params) => {
	const url = 'socialwork/v1/jobs/' + params.id;
	return request.get(url, params);
}
