export const getters = {
	doneImgUrl: state => {
		
		let store_img_url = state.taskDetails.store_img_url

		let imgUrlArray = []
		if (store_img_url.length != 0) {
			store_img_url.map((item, index) => {
				imgUrlArray.push(`http://oss.workai.com.cn/public/${JSON.parse(item).object}`)
			})
		} else {
			imgUrlArray.push('../../static/img/pic.png')
		}

		return imgUrlArray
	}
}
