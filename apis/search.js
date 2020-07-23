import http from '../utils/request.js'
//热门搜索
export function apiSearchHot(data) {
	return http.request({
		url: '/search/hot',
		method: 'GET',
		data
	})
}
//搜索建议
export function apiSerchSuggest(data) {
	return http.request({
		url: '/search/suggest',
		method: 'GET',
	})
}
//搜索
export function apiSearch(params='') {
	return http.request({
		url: '/search/songs'+params,
		method: 'GET'
	})
}

