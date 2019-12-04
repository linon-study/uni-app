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

//获取推荐任务
export const getRecommentdTaskUtils = (params) => {
	const url = 'socialwork/v1/sign-tasks' + params;
	return request.get(url, params);
}

//验证是否有提现功能
export const getWithdrawCheckUtils = (params) => {
	const url = 'socialwork/v1/withdraw-check';
	return request.get(url, params);
}

//获取个人积分
export const getIndividualPointsUtils = (params) => {
	const url = 'walletmgm/v1/points-account';
	return request.get(url, params);
}


