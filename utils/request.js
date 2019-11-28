import wxRequest from '../static/js/wechat-request.js';

const judgeAPI = (url) => {
	if(url.indexOf('api/') != -1) {
		const Authorization = getApp().globalData.Authorization;
		wxRequest.defaults.headers['Authorization'] = Authorization;
	} 
	return url;
}

const parseJSON = (response) => {
    return response.data;
}

const get = (url, data, options) => {
    wxRequest.defaults.headers.get['Content-Type'] = 'application/json';
    return wxRequest.get(url).then(parseJSON);
};

const post = (url, data = {}, options) => {
    wxRequest.defaults.headers.post['Content-Type'] = 'application/json';
		
    return wxRequest.post(url, data).then(parseJSON);
};

export default {
    get,
    post,
};