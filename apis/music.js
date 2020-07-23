import http from '../utils/request.js'
//歌单详情
export function getMuListDetail(song_id,params) {
	let url = '/covers/'+song_id + params
	return http.request({
		url,
		method: 'GET',
	})
}